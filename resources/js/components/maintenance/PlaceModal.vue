<template lang="pug">
#placeModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
  .modal-dialog(role='document')
    form.modal-content(@submit.prevent='submit()')
      .modal-header
        h5.modal-title Nuevo Lugar
        button.close(type='button', data-dismiss='modal', aria-label='Close')
          span(aria-hidden='true') ×
      .modal-body
        input.form-control(v-model='place.name' type='text' required)
      .modal-footer
        button.btn.btn-secondary(type='button', data-dismiss='modal') Cancelar
        button.btn.btn-primary(type='submit()') Guardar
</template>

<script>
export default {
  data() {
    return {
      place: {
        name: '',
      },
    }
  },
  methods: {
    submit() {
      this.$http.post('places', { place: this.place }).then(response => {
        this.place.name = '';
        this.$emit('update');
        $('.modal').modal('hide');
        console.log(response);
      }, response => {
        console.log(response);
      });
    }
  }
}
</script>

<style lang="css">
</style>
