<template>
  <section>
    <div class="row q-pa-md justify-center">
      <span>Reporte Covid-19 Colombia</span>
      <span>
        <q-icon name="img:statics/img/bandera-colombia-2.gif" />
      </span>
    </div>
    <div class="q-pa-md row items-start">
      <q-card class="my-card col-6" >
        <q-card-section>
          <p style="font-weight: bold;">
            Confirmados
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(info,'total_cases',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card col-6" >
        <q-card-section>
          <p style="font-weight: bold;">
            Recuperados
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(info,'total_recovered',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Muertes totales
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(info,'total_deaths',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Total de casos nuevos
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(info,'total_new_cases_today',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Total de casos activos
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(info,'total_active_cases',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-pa-md justify-center">
      <span>Reporte de infección Covid-19 a nivel mundial</span>
    </div>
    <div class="q-pa-md row items-start q-gutter-md q-mb-lg">
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Casos Confirmados
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(results,'total_cases',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Total recuperados
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(results,'total_recovered',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Muertes totales
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(results,'total_deaths',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Total de casos nuevos
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(results,'total_new_cases_today',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card" style="    min-width: 320px;">
        <q-card-section>
          <p style="font-weight: bold;">
            Total de casos activos
          </p>
          <div class="row w-100">
            <div class="col-auto">
              <q-icon name="mdi-account-multiple " style="font-size: 40px;"/>
            </div>
            <div class="col-auto q-ml-auto q-pa-none text-red-10" style="font-size: 29px; font-weight: bold;" >
              <p>
                {{_.get(results,'total_active_cases',0)}}
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      info: {
        total_cases: 0,
        total_recovered: 0,
        total_deaths: 0,
        total_new_cases_today: 0,
        total_active_cases: 0
      },
      results: {
        total_cases: 0,
        total_recovered: 0,
        total_unresolved: 0,
        total_deaths: 0,
        total_new_cases_today: 0,
        total_new_deaths_today: 0,
        total_active_cases: 0,
        total_serious_cases: 0
      }

    }
  },
  mounted () {
    this.axios.get('https://thevirustracker.com/free-api?countryTotal=CO').then(({ data }) => {
      this.info.total_cases = data.countrydata[0].total_cases
      this.info.total_recovered = data.countrydata[0].total_recovered
      this.info.total_unresolved = data.countrydata[0].total_unresolved
      this.info.total_deaths = data.countrydata[0].total_deaths
      this.info.total_new_cases_today = data.countrydata[0].total_new_cases_today
      this.info.total_active_cases = data.countrydata[0].total_active_cases
      this.info.total_serious_cases = data.countrydata[0].total_serious_cases
    }).catch(err => {
      console.log(err)
    })
    this.axios.get('https://thevirustracker.com/free-api?global=stats ').then(({ data }) => {
      this.results = data.results[0]
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
