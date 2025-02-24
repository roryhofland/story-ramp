<template>
    <div class="flex">
        <div
            ref="images"
            class="carousel self-center px-10 my-8 mx-auto bg-gray-200_ h-28_"
            :style="{ width: `${width}px` }"
        >
            <full-screen :expandable="config.fullscreen" :type="config.type">
                <hooper ref="carousel" v-if="width !== -1" class="h-full bg-white" :infiniteScroll="config.loop">
                    <slide v-for="(image, index) in config.images" :key="index" :index="index" class="self-center">
                        <img
                            :data-src="image.src"
                            :src="slideIdx > 2 ? '' : image.src"
                            :alt="image.altText || ''"
                            :style="{ width: `${image.width}px`, height: `${image.height}px` }"
                            class="m-auto story-graphic carousel-image"
                        />
                        <div
                            v-if="image.caption"
                            class="text-center my-8 text-sm"
                            v-html="md.render(image.caption)"
                        ></div>
                    </slide>

                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
            </full-screen>

            <div v-if="config.caption" class="text-center mt-5 text-sm" v-html="md.render(config.caption)"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

import MarkdownIt from 'markdown-it';

import { SlideshowPanel } from '@/definitions';
import FullscreenV from '@/components/panels/helpers/fullscreen.vue';

@Component({
    components: {
        Hooper,
        Slide,
        'full-screen': FullscreenV,
        HooperNavigation,
        HooperPagination
    }
})
export default class SlideshowPanelV extends Vue {
    @Prop() config!: SlideshowPanel;
    @Prop() slideIdx!: number;

    width = -1;

    md = new MarkdownIt({ html: true });

    observer =
        this.slideIdx > 2
            ? new IntersectionObserver(([image]) => {
                  // lazy load images
                  if (image.isIntersecting) {
                      (this.$refs.images as Element).querySelectorAll('.carousel-image').forEach((img) => {
                          img.setAttribute('src', img.getAttribute('data-src')!);
                      });
                      this.$forceUpdate();
                      this.observer!.disconnect();
                  }
              })
            : undefined;

    mounted(): void {
        setTimeout(() => {
            this.width = this.$el.clientWidth - 64;
        }, 100);

        this.observer?.observe(this.$refs.images as Element);
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
        transform: translate(50%, 200%);
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
        background-color: white;
    }
    .carousel-image {
        max-height: 48vh;
    }
}
</style>
