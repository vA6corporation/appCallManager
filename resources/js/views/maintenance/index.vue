<template lang="pug">
  .form-row
    category-modal(@update='fetchData()')
    place-modal(@update='fetchData()')
    selection-modal(@update='fetchData()')
    type-modal(@update='fetchData()')

    edit-category-modal
    edit-place-modal
    edit-selection-modal
    edit-type-modal
    .col-3
      ul.list-group
        li.list-group-item.list-group-item-info.d-flex.justify-content-between
          | Lugares
          a(href='#' data-toggle='modal' data-target='#placeModal') Agregar
        li.list-group-item.d-flex.justify-content-between(
          v-for='(item, index) in places')
          | {{ item.name }}
          a(href='#' data-toggle='modal' data-target='#editPlaceModal') Editar
    .col-3
      ul.list-group
        li.list-group-item.list-group-item-info.d-flex.justify-content-between
          | Tipos
          a(href='#' data-toggle='modal' data-target='#typeModal') Agregar
          li.list-group-item.d-flex.justify-content-between(
            v-for='(item, index) in types')
            | {{ item.name }}
            a(href='#' data-toggle='modal' data-target='#editTypeModal') Editar
    .col-3
      ul.list-group
        li.list-group-item.list-group-item-info.d-flex.justify-content-between
          | Rubros
          a(href='#' data-toggle='modal' data-target='#categoryModal') Agregar
          li.list-group-item.d-flex.justify-content-between(
            v-for='(item, index) in categories')
            | {{ item.name }}
            a(href='#' data-toggle='modal' data-target='#editCategoryModal') Editar
    .col-3
      ul.list-group
        li.list-group-item.list-group-item-info.d-flex.justify-content-between
          | Seleccion
          a(href='#' data-toggle='modal' data-target='#selectionModal') Agregar
          li.list-group-item.d-flex.justify-content-between(
            v-for='(item, index) in selections')
            | {{ item.name }}
            a(href='#' data-toggle='modal' data-target='#editSelectionModal') Editar
</template>

<script>
import CategoryModal from '@/components/maintenance/CategoryModal.vue'
import PlaceModal from '@/components/maintenance/PlaceModal.vue'
import SelectionModal from '@/components/maintenance/SelectionModal.vue'
import TypeModal from '@/components/maintenance/TypeModal.vue'

import EditCategoryModal from '@/components/maintenance/EditCategoryModal.vue'
import EditPlaceModal from '@/components/maintenance/EditPlaceModal.vue'
import EditSelectionModal from '@/components/maintenance/EditSelectionModal.vue'
import EditTypeModal from '@/components/maintenance/EditTypeModal.vue'
export default {
  components: {
    CategoryModal,
    PlaceModal,
    SelectionModal,
    TypeModal,
    EditCategoryModal,
    EditPlaceModal,
    EditSelectionModal,
    EditTypeModal,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      places: [],
      types: [],
      selections: [],
      categories: [],
    }
  },
  methods: {
    fetchData() {
      this.$http.get('places').then(response => {
        console.log(response);
        this.places = response.body.places;
      }, response => {
        console.log(response);
      });
      this.$http.get('types').then(response => {
        console.log(response);
        this.types = response.body.types;
      }, response => {
        console.log(response);
      });
      this.$http.get('selections').then(response => {
        console.log(response);
        this.selections = response.body.selections;
      }, response => {
        console.log(response);
      });
      this.$http.get('categories').then(response => {
        console.log(response);
        this.categories = response.body.categories;
      }, response => {
        console.log(response);
      });
    }
  }
}
</script>

<style lang="css">
</style>
