// ===================================================|
// Organisms: SEE ALL

// Components
import sections from '@/node_modules/cv-assets/components/sections';
import Modal from '@/node_modules/cv-assets/components/overlays/Modal';
import DotButton from '@/node_modules/cv-assets/components/atoms/DotButton';

export default {
  components: { Modal, DotButton },

  props: {
    content: {
      type: Object,
      required: true
    }
  },

  computed: {
    fullContent() {
      return {
        ...this.content,
        shownLimit: null
      }
    },
    sectionComponent() {
      return sections[this.content.id];
    }
  }
};
