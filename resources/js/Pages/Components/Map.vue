<template>
  <div id="map" class="w-full h-full">

  </div>
</template>

<script>
export default {
  name: "Map"
}
</script>

<script setup>
import {onMounted} from 'vue'
import maplibregl from "maplibre-gl";


onMounted(() => {
  const map = (
    window.map = new maplibregl.Map({
      container: 'map',
      center: [-37.102225, -10.925325],
      zoom: 16,
      pitch: 0,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap Contributors',
            maxzoom: 19
          },
          terrainSource: {
            type: 'raster-dem',
            url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
            tileSize: 256
          },
          hillshadeSource: {
            type: 'raster-dem',
            url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
            tileSize: 256
          }
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm'
          },
          {
            id: 'hills',
            type: 'hillshade',
            source: 'hillshadeSource',
            layout: {visibility: 'visible'},
            paint: {'hillshade-shadow-color': '#473B24'}
          }
        ],
        terrain: {
          source: 'terrainSource',
          exaggeration: 1
        }
      },
      maxZoom: 18,
      maxPitch: 85
    }));
  map.addControl(
    new maplibregl.NavigationControl({
      visualizePitch: true,
      showZoom: true,
      showCompass: true
    })
  );
})

</script>

<style scoped>

</style>
