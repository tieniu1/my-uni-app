import { getRect } from '../common/utils';
import { VantComponent } from '../common/component';
import { useParent } from '../common/relation';
VantComponent({
    relation: useParent('picker-bar'),
    props: {
        useSlot: Boolean,
        index: null,
    },
    data: {
        active: false,
        wrapperStyle: '',
        anchorStyle: '',
    },
    methods: {
        scrollIntoView(scrollTop) {
            getRect(this, '.van-picker-anchor-wrapper').then((rect) => {
                wx.pageScrollTo({
                    duration: 0,
                    scrollTop: scrollTop + rect.top - this.parent.data.stickyOffsetTop,
                });
            });
        },
    },
});
