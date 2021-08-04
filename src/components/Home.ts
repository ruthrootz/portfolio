import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    private isMobile = false;

    private mounted(): void {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    }

}
