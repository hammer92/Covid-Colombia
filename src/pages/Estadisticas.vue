<template>
    <section>
      <div class="q-pa-md row items-center justify-around q-gutter-sm">
        <div class="col-12 q-mb-md text-center text-h5">
          <span>Reporte Covid-19 Colombia</span>
          <span><q-icon name="img:statics/img/bandera-colombia-2.gif" /></span>
        </div>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <div class="text-subtitle1">Confirmados: {{ Confirmados }} </div>
            <div class="text-subtitle2"> {{ porcentajeConfirmados }} % Poblacion </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <div class="text-subtitle1">Descartados: {{ Recuperados }} </div>
            <div class="text-subtitle2"> {{ porcentajeRecuperados }} % Confirmados</div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <div class="text-subtitle2">Muertes: {{ Fallecidos }} </div>
            <div class="text-subtitle2">{{ porcentajeFallecidos }} % Confirmados</div>
          </q-card-section>
        </q-card>

        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <div class="text-subtitle2">Importados: {{ Importados}} </div>
            <div class="text-subtitle2">{{ porcentajeImportados }} % Confirmados</div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <div class="text-subtitle2">Relacionados: {{ Relacionados }} </div>
            <div class="text-subtitle2">{{ porcentajeRelacionados }} % Confirmados</div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <div class="text-subtitle2">Estudio: {{ Estudio }} </div>
          </q-card-section>
        </q-card>
      </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      data: []
    }
  },
  computed: {
    porcentajeConfirmados () {
      return ((this.Confirmados / 50372424) * 100).toFixed(5)
    },
    porcentajeRecuperados () {
      return ((this.Recuperados / this.Confirmados) * 100).toFixed(2)
    },
    porcentajeFallecidos () {
      return ((this.Fallecidos / this.Confirmados) * 100).toFixed(2)
    },
    porcentajeRelacionados () {
      return ((this.Relacionados / this.Confirmados) * 100).toFixed(2)
    },
    porcentajeImportados () {
      return ((this.Importados / this.Confirmados) * 100).toFixed(2)
    },
    ...mapGetters('InsInforme', ['Confirmados', 'Fallecidos', 'Recuperados', 'Relacionados', 'Importados', 'Estudio'])
  },
  mounted () {
    this.general()
    this.estudios()
  },
  methods: {
    ...mapActions('InsInforme', ['general', 'estudios'])
  }
}
</script>
