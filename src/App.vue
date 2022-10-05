<template>
  <Page class="page">
      <Columns modeM="full">
        <Block>
          <h1>Screen width: {{width}}</h1>
        </Block>
        <Block>
          <div class="page__range">
            <div><div>xxs</div><div>300px</div><div>399px</div></div> 
            <div><div>xs</div><div>400px</div><div>575px</div></div> 
            <div><div>s</div><div>576px</div><div>767px</div></div> 
            <div><div>m</div><div>768px</div><div>991px</div></div>
            <div><div>l</div><div>992px</div><div>1199px</div></div>
            <div><div>xl</div><div>1200px</div><div>1599px</div></div> 
            <div><div>xxl</div><div>1600px</div><div>2559px</div></div> 
            <div><div>xxxl</div><div>2560px</div><div>infinito</div></div> 
          </div>
        </Block>
        <Block>
          <div class="page__content">
            <div class="page__content__inputs">
              <div v-for="(screen, name) in screens" :key="name">
                  <input type="radio" :id="{name}" :value="{name}" v-model="screenSelected" />
                  <label :for="{name}">{{name}}</label>
              </div>
            </div>
            <div class="page__content__screens">
              <small-component :screens="screens[screenSelected.name]"></small-component>
            </div>
          </div>
        </Block>
      </Columns>
    </Page>
</template>
<script>
import SmallComponent from "./components/SmallComponent.vue";

export default {
  name: 'App',
  components: { SmallComponent },
  data() {
    return {
      width: 0,
      screenSelected: {name: "small"},
      screens: {
        small: [
          "xxs",
          "xs",
          "xs and down",
          "<=xs",
          "s",
          "s and up",
          ">=s",
          ">xs",
          "s and down",
          "<=s",
          ">s",
        ],
        medium: [
          "<m",
          "m",
          "m and up",
          ">=m",
          "m and down",
          "<=m",
          ">m",
        ],
        large: [
          "l",
          "l and up",
          ">=l",
          "l and down",
          "<=l",
          "xl",
          "xl and down",
          "<=xl",
          "xl and up",
          ">=xl",
          ">l",
          "xxl",
          "xxl and down",
          "<=xxl",
          "xxl and up",
          ">=xxl",
          ">xl",
          "xxxl",
        ]
      }
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.width = window.innerWidth;
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.width = e.target.innerWidth;
    }
  }
};
</script>
<style lang="scss" scoped>
  .page {
    h1 {
      text-align: center;
    }
    &__range {
      display: grid;
      justify-items: center;
      > div {
        width: max-content;
        display: grid;
        grid-template-columns: 80px 80px 80px;
        grid-column-gap: 1rem;
        font-size: 20px;
        font-weight: bold;
        div {
          &:nth-child(2), &:nth-child(3) {
            text-align: end;
          }
        }
      }
    }
    &__content {
      &__inputs {
        padding: 1rem;
        margin: auto;
        width: max-content;
        display: grid;
        grid-template-columns: auto auto auto;
        justify-self: center;
        div {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-column-gap: 1rem;
          input {
            cursor: pointer;
          }
        }
      }
      &__screens {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-row-gap: .5rem;
        grid-column-gap: .5rem;
      }
    }
  }
</style>
