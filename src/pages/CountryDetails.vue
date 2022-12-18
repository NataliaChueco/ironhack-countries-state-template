<template>
  <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryStore.flag.toLowerCase()}.png`" alt="country flag" style="width: 300px" />
  <h1>{{countryStore.country}}</h1>
  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{countryStore.capital}}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{countryStore.area }}km <sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
            <li v-for="border in countryStore.borders" >
              <a href="/"> {{border}}</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import {useCountryStore} from "../stores/country"
  const countryStore =  useCountryStore();
  
</script>

<style></style>
