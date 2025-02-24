<template>
    <div class="flex">
        <div class="carousel self-center px-10 my-8 mx-auto bg-gray-200_" :style="{ width: `${width}px` }">
            <hooper
                ref="carousel"
                v-if="width !== -1 && config.charts.length > 1"
                class="h-full"
                :infiniteScroll="config.loop"
            >
                <slide
                    v-for="(chartConfig, index) in config.charts"
                    :key="`chart-${index}`"
                    :index="index"
                    class="self-center"
                >
                    <dqv-chart :config="chartConfig" />
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>

            <div v-else-if="width !== -1">
                <dqv-chart :config="config.charts[0]" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

import { ChartPanel } from '@/definitions';
import ChartV from '@/components/panels/helpers/chart.vue';

@Component({
    components: {
        'dqv-chart': ChartV,
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
    }
})
export default class ChartPanelV extends Vue {
    @Prop() config!: ChartPanel;

    width = -1;

    mounted(): void {
        setTimeout(() => {
            this.width = this.$el.clientWidth - 64;
        }, 100);
    }
}
</script>

<style lang="scss" scoped>
.hooper {
    height: auto;

    ::v-deep .hooper-navigation svg {
        overflow: visible;
        padding-left: initial !important;
        border-radius: 100%;
        background: radial-gradient(white, transparent 75%);
    }

    ::v-deep .hooper-next {
        right: calc(-32px - 2em);
    }

    ::v-deep .hooper-prev {
        left: calc(-32px - 2em);
    }

    ::v-deep .hooper-pagination {
        transform: translate(50%, 100%);
    }

    ::v-deep .hooper-indicator {
        border: 1px solid #878787;

        width: 24px;
        height: 6px;
        border-radius: 0px;

        &.is-active {
            border: none;
            background-color: var(--sr-accent-colour);
        }

        &:hover {
            background-color: white;
            // background-color: lighten(#00d2d3, 20%);
            border-color: var(--sr-accent-colour);
        }
    }
}

@media screen and (max-width: 640px) {
    .carousel {
        max-width: 100vw;
        max-height: 50vh;
        background-color: white;
    }
}
</style>
