<template>
  <section class="src-components-form">
    <h1>FORM</h1>
    <hr />

    <vue-form :state="formstate" @submit.prevent="enviar()">
      <!-- NOMBRE -->
      <validate tag="div" class="form-group row">
        <label for="nombre" class="col-sm-1 col-form-label">Nombre</label>
        <div class="col-sm-10">
          <input
            type="text"
            id="nombre"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
            placeholder="Nombre"
            class="form-control"
          />
          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreMinLength }} caracteres.
            </div>
          </field-messages>
        </div>
      </validate>

      <!-- EDAD -->
      <validate tag="div" class="form-group row">
        <label for="edad" class="col-sm-1 col-form-label">Edad</label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
            name="edad"
            id="edad"
            placeholder="edad"
          />
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima es {{ edadMin }}.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima es {{ edadMax }}.
            </div>
          </field-messages>
        </div>
      </validate>

      <!-- EMAIL -->
      <validate tag="div" class="form-group row">
        <label for="email" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            v-model.trim="formData.email"
            required
            name="email"
            id="email"
            placeholder="Email"
          />
  
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </div>
      </validate>

      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="submit"
            :disabled="formstate.$invalid"
            class="btn btn-success"
          >
            Enviar
          </button>
        </div>
      </div>
    </vue-form>

    <!-- TABLA DE PERSONAS -->
    <div v-if="listaPersonas.length" class="table-responsive">
      <table class="table">
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
        <tr v-for="(persona, index) in listaPersonas" :key="index">
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.edad }}</td>
          <td>{{ persona.email }}</td>
        </tr>
      </table>
    </div>
    <h4 v-else class="alert alert-info">No hay personas ingresadas</h4>
  </section>
</template>

<script>
  export default  {
    name: 'src-components-form',
    props: [],
    mounted () {
    },
    data () {
      return {
      listaPersonas: [],
      formstate: {},
      formData: this.getInitialData(),
      formState : {},
      nombreMinLength : 5,
      nombreMaxLength : 15,
      edadMin: 18,
      edadMax: 120,
    }
    },
    methods: {
      getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },

    enviar(){
     let persona = { ...this.formData };
      this.listaPersonas.push(persona);
      this.formData = this.getInitialData();
      this.formstate._reset();
    },
     
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-form {
}
</style>