<!--template>
  <div>
    <div>
      緯度：{{latitude}}、経度：{{longitude}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      latitude: 0,
      longitude: 0
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position){
          let coords = position.coords;
          // 緯度経度だけ取得
          this.latitude = coords.latitude;
          this.longitude = coords.longitude;
        }.bind(this),
        function(error) {
          // エラー処理を書く
        }
      );
    } else {
      // エラー処理を書く
    }
  }
}
</script-->
