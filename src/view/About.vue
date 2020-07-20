<template>
  <div class="about">
    <p>Gjord av: {{$store.getters.getName}}</p>
    <h2>Info om Covid-19</h2>

    <!-- lagt till en props -->
    <my-button name="Share" :handleClick="shareMe"></my-button>
    <my-button name="Like" :handleClick="likeMe"></my-button>
    <my-button name="Comment" :handleClick="commentMe"></my-button>

    <div class="box">
      <input type="checkbox" v-model="someBoolean" />
      {{ someBoolean }}
    </div>
    <div class="button">
      <input type="text" v-on:keyup.enter="pressedEnter" value="Märk rutan sen enter" />
    </div>
    <div class="h1">
      <p>
        Covid-19 är en infektionssjukdom som orsakas av ett virus. Sjukdomen påminner ofta om förkylning eller influensa, med feber och hosta.
        En del har andra symtom. De flesta blir inte svårt sjuka, men en del behöver vård på sjukhus.
      </p>

      <h3>Symtom</h3>

      <p>
        Symtom
        Covid-19 påminner ofta om vanlig förkylning eller influensa. En del blir allvarligt sjuka, men de flesta som får sjukdomen blir lindrigt sjuka och kommer inte att veta att det är covid-19.
        Du kan ha ett eller flera av följande symtom:
      </p>
    </div>
    <div class="list-sym">
      <li>Hosta</li>
      <li>Feber</li>
      <li>Andningsbesvär</li>
      <li>Snuva</li>
      <li>Nästäppa</li>
      <li>Halsont</li>
      <li>Huvudvärk</li>
      <li>Illamående</li>
      <li>Värk i muskler och leder</li>
    </div>
    <div class="link">
      <a
        href="https://www.1177.se/Vastra-Gotaland/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/om-covid-19--coronavirus/covid-19-coronavirus/"
      >Källa: 1177 vårdguiden</a>
      <p>Klicka på länken ovanför för att läsa mer.</p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    "my-button": Button
  },
  button: "text",
  name: "Box",
  // Lagt till prop.
  props: ["someName", "handleClick"],
  data() {
    return {
      someBoolean: false,
      pressedEnter() {
        alert("you pressed the enter key");
      },
      // la till props med handleClick.
      shareMe() {
        return alert("Shared");
      },
      likeMe() {
        return alert("Liked");
      },
      commentMe() {
        return alert("Nice try!");
      }
    };
  }
};
</script>

<style scoped>
.h1 {
  width: 900px;
  height: auto;
  display: inline-block;
}
.h2 {
  width: 900px;
  height: auto;
  display: inline-block;
}
.button {
  size: inherit;
}
.list-sym {
  display: inline;
  padding-top: 10px;
}
.link {
  color: black;
  padding-top: 20px;
}
</style>
