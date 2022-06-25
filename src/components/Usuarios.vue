<template>
  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h2>Componente Usuarios</h2>
      <hr />
      <br />

      <button class="btn btn-success my-3 mr-3" @click="getPostsXHRpromise()">
        Pedir XHR (promise)
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">
        Pedir Fetch
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">
        Pedir Axios
      </button>
      <button class="btn btn-danger my-3" @click="posts = []">CLEAR</button>
      <br />

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr v-for="(post, index) in posts" :key="index">
            <td>{{ post.name }}</td>
            <td>{{ post.email }}</td>
            <td>{{ post.phone }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">
          Se encontraron {{ posts.length }} posts.
        </h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">
        No se encontraron posts
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-usuarios",
  props: [],
  mounted() {},
  data() {
    return {
      url: "https://62b708ec491a19c97aed7ab6.mockapi.io/posts",
      posts: [],
    };
  },
  methods: {
      /* -------------------------------------------------------------------------------------------- */
      /*                                     XHR con interface Promise                                */
      /* -------------------------------------------------------------------------------------------- */
      wrapperXHRpromise() {
        return new Promise((resolve,reject) => {
         
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              resolve(respuesta)
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
              let error = {
                title: 'ERROR XHR cb (status)',
                status: xhr.status
              }
              reject(error)
            }
          })

          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
              let error = {
                title: 'ERROR XHR cb (ajax)',
                info: e
              }
              reject(error)
          })
          xhr.send()
        })
      },
      
      /* -------------------------------------------------------------------------------------------- */
      /*                    Petición Ajax con XHR callback wrapeado en una promise                    */
      /* -------------------------------------------------------------------------------------------- */
      async getPostsXHRpromise() {
          try {
            let respuesta = await this.wrapperXHRpromise()
            this.posts = respuesta
          }
          catch(error) {
            console.error('Error XHRpromise', error)
          }
      },

    /* -------------------------------------------------------------------------------------------- */
    /*                                    Petición Ajax con Fetch                                   */
    /* -------------------------------------------------------------------------------------------- */
    async getPostsFetch() {
      try {
        let response = await fetch(this.url);
        let respuesta = await response.json();
        this.posts = respuesta;
      } catch (error) {
        console.error("Error Fetch", error);
      }
    },

    /* -------------------------------------------------------------------------------------------- */
    /*                                    Petición Ajax con Axios                                   */
    /* -------------------------------------------------------------------------------------------- */
    // -----  UTILIZANDO LA SINTAXIS ASYNC/AWAIT ----

    async getPostsAxios() {
      try {
        let { data } = await this.axios(this.url);
        this.posts = data;
      } catch (error) {
        console.error("Error Axios", error);
      }
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.src-components-usuarios {
}
</style>
