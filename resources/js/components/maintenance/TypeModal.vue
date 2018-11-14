<template lang="pug">
#typeModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
  .modal-dialog(role='document')
    form.modal-content(@submit.prevent='submit()')
      .modal-header
        h5.modal-title Nuevo Tipo
        button.close(type='button', data-dismiss='modal', aria-label='Close')
          span(aria-hidden='true') ×
      .modal-body
        input.form-control(v-model='type.name' type='text' required)
      .modal-footer
        button.btn.btn-secondary(type='button', data-dismiss='modal') Cancelar
        button.btn.btn-primary(type='submit()') Guardar
</template>

<script>
export default {
  data() {
    return {
      type: {
        name: '',
      }
    }
  },
  methods: {
    submit() {
      this.$http.post('types', { type: this.type }).then(response => {
        this.type.name = '';
        this.$emit('update');
        $('.modal').modal('hide');
        console.log(response);
      }, respones => {
        console.log(response);
      })
    }
  }
}
</script>

<style lang="css">
</style>
