<script setup>
import {ref, onMounted, nextTick, watch} from 'vue';
import Typed from 'typed.js';

const showDialog = ref(false);
const dialogContent = ref('');
const typedTarget = ref(null);
let typed = null;
let intervalId = null;

const handleClick = (content) => {
  dialogContent.value = content;
  showDialog.value = true;

  nextTick(() => {
    if (typed) typed.destroy();
    typed = new Typed(typedTarget.value, {
      strings: [content],
      typeSpeed: 15,
      showCursor: false
    });
  });
};

onMounted(() => {
  typed = new Typed(typedTarget.value, {
    strings: [dialogContent.value],
    typeSpeed: 15,
    showCursor: false
  });

  // Start the image rotation
  startImageRotation();
});

// Image rotation
const images = ['red.png', 'red1.png', 'red3.png', 'red2.png'];
const currentImage = ref(images[0]);
let imageIndex = 0;

const startImageRotation = () => {
  intervalId = setInterval(() => { // Assign intervalId
    imageIndex = (imageIndex + 1) % images.length;
    currentImage.value = images[imageIndex];
  }, 2000);
};

const showExclamation = ref(false);

const showMessage = ref(false);
const nextMessage = ref(false);

const showExclamationImage = () => {
  console.log('showExclamationImage');
  showExclamation.value = true;
  clearInterval(intervalId); // Stop image rotation

  setTimeout(() => {
    showExclamation.value = false;
    startImageRotation(); // Restart image rotation
  }, 2000);

  setTimeout(() => {
    showDialog.value = false;
    showMessage.value = true; // Show the message after 3 seconds
  }, 2000);
};

const showNextMessage = () => {
  nextMessage.value = true;
};

const closeModal = () => {
  showMessage.value = false;
  typed.destroy();
};
</script>

<template>
  <main class="landing-zone">
    <img class="exclamation" v-if="showExclamation" src="/images/exclamation.png" alt="exclamation" width="25px">
    <img class="sprite" :src="'/images/' + currentImage" alt="sprite personnage" height="25px"
         @click="showExclamationImage">


    <h1>Cyndel Herolt <span>©</span></h1>
    <small>Junior full stack developer</small>
    <div>
      <ul>
        <li><small>>></small> <a
            @click="handleClick('Salut aventurier ! Au coeur de Symfony, j\'ai appris à maîtriser les arcanes du dev-back et exploré les méandres du dev-front avec Stimulus, UX Live Components, Turbo et Mercure.')">T'en
          es où en dev-back ?</a></li>
        <li><small>>></small> <a
            @click="handleClick('Hey encore toi ?! Dans les contrées de Vue.js, j\'ai exploré les sentiers sinueux du dev-front pour créer des interfaces dynamiques et interactives.')">Et
          en dev-front ?</a></li>
        <li><small>>></small> <a
            @click="handleClick('Je vois que tu veux en savoir plus... Au cours de mes nombreuses quêtes, j\'ai appris les rudiments de ReactsJs, ThreeJs et Unity,  j\'ai administré tout ça sous Debian avec Apache et MySql.')">Mais
          encore ?</a></li>
      </ul>
    </div>
    <div v-if="showMessage" class="modal">
      <div class="modal-message">
        <h3>Qui suis-je ? Hum... Bonne question.</h3>
        <br>
        <p>
          Je m'appelle Cyndel, je suis étudiante à l'IUT de Troyes en 3ème année de Bachelor Universitaire de
          Technologie des Métiers du Multimédia et de l'Internet.
          <br>
          Un peu long et abstrait ? Retiens juste que je fais du dev mais que j'ai aussi des compétences solides en
          graphisme et en communication.</p>
        <p>Je suis également alternante au service informatique de ce même IUT pour lequel je développe des applications
          web à portée pédagogique et je travaille aussi à l'optimisation et la refonte de l'intranet de
          l'établissement.
        </p>
        <br>
        <p>Sur un plan plus personnel, j'ai un paquet de passions et de hobbies. A mes heures perdues, je peins, je
          sculpte ou je dessine, je lis un max de BD, je fais du tennis de table et je joue à tout plein de jeux,
          virtuels ou non, tout ça avec des gros sons post-punk ou de la soul dans les oreilles. Mais bon, pour être
          honnête, je passe surtout la majorité de mes journées sur PhpStorm.
        </p>
        <br>
        <div>
        <a class="message-response" @click="showNextMessage">>> Comment t'en es venu à faire du dev ?</a>
        </div>
        <br>
        <p v-if="nextMessage">
          Je ne vais pas vous dire que j'ai toujours été passionnée par les technologies et le numérique. En réalité, j'ai commencé à m'y intéresser sur le tard, lorsque j'ai rejoins la formation MMI sans trop savoir dans quoi je m'embarquais. Moi au départ, j'avais deux ambitions professionnelles : devenir prof de français ou illustratrice.
        </p>
        <p v-if="nextMessage">Pour tout un tas de raison que je ne vais pas vous raconter ici, j'ai dû laisser tomber ces projets et abandonner mes études. Après quelques années à baguenauder, j'ai fini par me retrouver à l'IUT de Troyes, en MMI. Et là, j'ai découvert que le web, ça fonctionnait grâce à tout un tas d'engrenages et de mécanismes qui ne demandent qu'à être compris et maîtrisés. Et j'ai adoré ça. J'ai adoré comprendre comment ça marchait, j'ai adoré apprendre à le faire marcher, à mettre en place des processus complexes qui pour l'utilisateur lambda, sont complètement transparents, transformant alors le développeur en artisan de l'ombre.
        </p>
      </div>
      <div class="modal-footer">
        <button @click="closeModal">Quitter</button>
      </div>
    </div>

    <div class="dialog-box" v-show="showDialog">
      <div>
        <p ref="typedTarget">{{ dialogContent }}</p>
      </div>
    </div>
  </main>
</template>