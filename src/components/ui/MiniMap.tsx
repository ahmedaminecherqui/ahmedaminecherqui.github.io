/**
 * MiniMap.tsx
 * A small Leaflet map embedded in Journey cards.
 *
 * Uses CartoDB Dark Matter tiles (free, no API key required).
 * Accepts one or more MapLocation pins.
 */

import { useEffect, useRef, useState } from 'react';
import type { Map as LeafletMap } from 'leaflet';

import type { MapLocation } from '../../types';

interface MiniMapProps {
  locations: MapLocation[];
  height?: number;
}

export default function MiniMap({ locations, height = 170 }: MiniMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef       = useRef<LeafletMap | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Dynamic import keeps Leaflet out of the SSR/initial bundle
    import('leaflet').then((L) => {
      if (!containerRef.current || mapRef.current) return;

      // ── Fix Leaflet's default icon paths (breaks in Vite) ──────
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl:       'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl:     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      // ── Determine initial center ──────────────────────────────
      const center: [number, number] =
        locations.length === 1
          ? [locations[0].lat, locations[0].lng]
          : [
              locations.reduce((s, l) => s + l.lat, 0) / locations.length,
              locations.reduce((s, l) => s + l.lng, 0) / locations.length,
            ];

      const zoom = locations.length === 1 ? 15 : 14;

      // ── Create map ────────────────────────────────────────────
      const map = L.map(containerRef.current, {
        center,
        zoom,
        zoomControl:       true,
        scrollWheelZoom:   false,   // disable to not fight page scroll
        dragging:          true,
        doubleClickZoom:   true,
        attributionControl: true,
      });

      // ── CartoDB Dark Matter tiles (free, no API key) ──────────
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom:    20,
        },
      ).addTo(map);

      // ── Custom styled marker ──────────────────────────────────
      const customIcon = L.divIcon({
        className: 'minimap-marker',
        html: `<div class="minimap-marker__pin"><div class="minimap-marker__dot"></div></div>`,
        iconSize:   [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -36],
      });

      // ── Add markers with tooltips ─────────────────────────────
      locations.forEach((loc) => {
        L.marker([loc.lat, loc.lng], { icon: customIcon })
          .addTo(map)
          .bindTooltip(loc.label, {
            permanent:  false,
            direction:  'top',
            className:  'minimap-tooltip',
          });
      });

      // ── If multiple pins, fit bounds ──────────────────────────
      if (locations.length > 1) {
        const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
        map.fitBounds(bounds, { padding: [30, 30] });
      }

      mapRef.current = map;
      setReady(true);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`minimap-wrapper${ready ? ' minimap-wrapper--ready' : ''}`}>
      <div
        ref={containerRef}
        className="minimap-container"
        style={{ height }}
        aria-label="Location map"
      />
      {!ready && (
        <div className="minimap-loading" aria-hidden="true">
          <span>📍 Loading map…</span>
        </div>
      )}
    </div>
  );
}
