<template lang="pug">
  .row
    .col-12.form-group
      .card
        .card-body
          .d-flex.justify-content-between
            h3 Usuarios
            .form-group
              a.pr-2(href='#') Nuevo Usuario
                <i data-feather='plus'></i>
              a(href='#') Permisos
                <i data-feather='check-square'></i>
          table.table.table-sm.table-bordered.table-striped
            thead
              th Nombres
              th Email
              th Permisos
              th Opciones
            tbody
              tr(v-for='(item, index) in users')
                td {{ item.name }}
                td {{ item.email }}
                td Permiso
                //td {{ item.permiso.name }}
                td
                  a(href='#') Editar
</template>

<script>
export default {
  mounted() {
    this.$http.get('users').then(response => {
      console.log(response);
      this.users = response.body.users;
    }, response => {
      console.log(response);
    })
  },
  data() {
    return {
      users: [],
    }
  },
}
</script>

<style lang="css">
</style>
