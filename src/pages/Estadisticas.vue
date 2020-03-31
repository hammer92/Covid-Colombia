<template>
    <section>
      <div class="q-pa-md row items-center justify-around q-gutter-sm">
        <div class="col-12 q-mb-md text-center text-h5">
          <span>Reporte Covid-19 Colombia</span>
          <span><q-icon name="img:statics/img/bandera-colombia-2.gif" /></span>
        </div>
        <q-card class="my-card bg-blue-3 text-white col-12 col-sm-3 curve-confirmados">
          <q-icon class="q-my-sm" name="how_to_reg" style="font-size: 4rem;" />
          <trend-chart
            v-if="Confirmados"
            style="width: 100%; position: absolute; right: 0"
            :datasets="graficaConfirmados"
            :min="0"/>
          <q-card-section>
            <div class="text-subtitle1">Confirmados: {{ Confirmados }} </div>
            <div class="text-subtitle2"> {{ porcentajeConfirmados }} % Poblacion Colombia </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-green-3 text-white col-12 col-sm-3 curve-recuperados">
          <q-icon class="q-my-sm" name="insert_emoticon" style="font-size: 4rem;" />
          <trend-chart
            v-if="Recuperados"
            style="width: 100%; position: absolute; right: 0"
            :datasets="graficaRecuperados"
            :min="0"/>
          <q-card-section>
            <div class="text-subtitle1">Recuperados: {{ Recuperados }} </div>
            <div class="text-subtitle2"> {{ porcentajeRecuperados }} % Confirmados</div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-red-3 text-white col-12 col-sm-3 curve-fallecidos">
          <q-icon class="q-my-sm" name="sentiment_very_dissatisfied" style="font-size: 4rem;" />
          <trend-chart
            v-if="Fallecidos"
            style="width: 100%; position: absolute; right: 0"
            :datasets="graficaFallecidos"
            :min="0"/>
          <q-card-section>
            <div class="text-subtitle1">Muertes: {{ Fallecidos }} </div>
            <div class="text-subtitle2">{{ porcentajeFallecidos }} % Confirmados</div>
          </q-card-section>
        </q-card>

        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <q-icon class="q-my-sm" name="public" style="font-size: 4rem;" />
            <div class="text-subtitle1">Importados: {{ Importados}} </div>
            <div class="text-subtitle2">{{ porcentajeImportados }} % Confirmados</div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <q-icon class="q-my-sm" name="people" style="font-size: 4rem;" />
            <div class="text-subtitle1">Relacionados: {{ Relacionados }} </div>
            <div class="text-subtitle2">{{ porcentajeRelacionados }} % Confirmados</div>
          </q-card-section>
        </q-card>
        <q-card class="my-card bg-purple text-white col-12 col-sm-3">
          <q-card-section>
            <q-icon class="q-my-sm" name="pageview" style="font-size: 4rem;" />
            <div class="text-subtitle1">Estudio: {{ Estudio }} </div>
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
    }
  },
  computed: {
    graficaConfirmados () {
      return [{ data: this.GConfirmados, smooth: true, fill: true }]
    },
    graficaFallecidos () {
      return [{ data: this.GFallecidos, smooth: true, fill: true }]
    },
    graficaRecuperados () {
      return [{ data: this.GRecuperados, smooth: true, fill: true }]
    },
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
    ...mapGetters('InsInforme', [
      'Confirmados', 'Fallecidos', 'Recuperados', 'Relacionados', 'Importados', 'Estudio',
      'GConfirmados', 'GFallecidos', 'GRecuperados'
    ])
  },
  mounted () {
    this.general()
    this.estudios()
  },
  methods: {
    onMouseMove () {},
    ...mapActions('InsInforme', ['general', 'estudios'])
  }
}
</script>

<style lang="scss">
  .curve-recuperados {
    .stroke {
      stroke: #39af77;
    }
    .fill {
      fill: #39af77;
    }
    .point {
      fill: #39af77;
      stroke: #39af77;
    }
  }

  .curve-fallecidos {
    .stroke {
      stroke: #d8002b;
    }
    .fill {
      fill: #d8002b;
    }
    .point {
      fill: #d8002b;
      stroke: #d8002b;
    }
  }
  .curve-confirmados {
  .stroke {
    stroke: #259dff;
  }
  .fill {
    fill: #259dff;
  }
  .point {
    fill: #259dff;
    stroke: #259dff;
  }
  }
</style>
