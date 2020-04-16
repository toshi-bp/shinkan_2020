<template>
  <div>
    <client-only>
      <MapHeader
        :show="!!showingMapHeader"
      />
    </client-only>
    <CampusMap
      :width="width"
      :height="height"
      @clickLabel="openKikakuList"
      @changeScale="hideMapHeader"
      @move="hideMapHeader"
    />
    <Establishment
      :show="!!$route.query.area"
      :area="$route.query.area"
      @closeIntro="closeIntro"
    />
  </div>
</template>

<script>
import makeHead from '~/utils/makeHead';
import CampusMap from '~/components/CampusMap/index.vue';
import MapHeader from '~/components/organisms/MapHeader.vue';
import Establishment from '~/components/CampusMap/establishment.vue';

// 将来的に GlobalHeader の高さが変わったとしても、
// 地図が一画面に収まらなくなるだけで、特に問題がないので、
// ここで決め打ちする。
const globalHeaderHeight = 72;

export default {
  watchQuery: ['area'],
  head() {
    return makeHead(
      'キャンパスマップ',
      '東京理科大学野田キャンパスのマップです。',
      require('~/assets/maps/map.svg')
    );
  },
  components: {
    MapHeader,
    CampusMap,
    Establishment,
  },
  data() {
    return {
      width: 0,
      height: 250,
      showingMapHeader: false,
    };
  },
  methods: {
    updateMapSize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight - globalHeaderHeight;
    },
    openKikakuList(e) {
      this.$router.push({ query: { area: e.text } });
    },
    showMapHeader() {
      this.showingMapHeader = true;
    },
    hideMapHeader() {
      this.showingMapHeader = false;
    },
    closeIntro() {
      this.$router.push({ query: {} });
    }
  },
  computed: {
    // 現在表示中のエリア
    area() {
      return this.$route.query.area;
      },
    },
    mounted() {
      if (process.client) {
        this.updateMapSize();
        window.addEventListener('resize', this.updateMapSize);
        this.showingMapHeader = true;
      }
    },
    updated() {
      if (process.client) {
        this.updateMapSize();
      }
    },
    destroyed() {
      console.log('destroyed');
      if (process.client) {
        window.removeEventListener('resize', this.updateMapSize);
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
