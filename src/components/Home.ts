import { Component, Vue } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars)

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
