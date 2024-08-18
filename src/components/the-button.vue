<template>
  <button
    ref="owButton"
    :class="{
      large: !small,
      small: small,
      'full-height': fullHeight,
      'full-width': fullWidth,
      icon: icon,
      primary: !disabled && isPrimary,
      _secondary: !disabled && isSecondary,
      danger: !disabled && isDanger,
      'danger-light': !disabled && isDangerLight,
      highlight: !disabled && isHighlight,
      disabled: disabled,
      'has-icon-prefix': hasIconPrefix,
      'has-icon-suffix': hasIconSuffix,
      'is-borderless': isBorderless,
      'is-tile': tile,
      'is-flat': isFlat,
      'is-text': isText,
    }"
    :disabled="disabled"
    class="the-button"
    type="button"
    @click="$emit('click', $event)"
    @mousedown="$emit('mousedown', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    @mouseup="$emit('mouseup', $event)"
    @touchcancel="$emit('touchcancel', $event)"
    @touchend="$emit('touchend', $event)"
    @touchstart="$emit('touchstart', $event)"
  >
    <slot
      v-if="hasIconPrefix"
      name="iconPrefix"
    />

    <span
      v-if="!isLoading"
      class="the-button__label"
      ><slot
    /></span>

    <loading-text
      v-if="isLoading"
      text="Loading"
      :is-loading="isLoading"
    />

    <slot
      v-if="hasIconSuffix"
      name="iconSuffix"
    />
  </button>
</template>

<script lang="ts" setup >
    import {
        computed,
        useSlots
    } from 'vue'
    import LoadingText from '@/components/loading-text.vue'

    defineProps({
    disabled: {
      type: Boolean,
      required: false,
    },
    fullHeight: {
      type: Boolean,
      required: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: Boolean,
      required: false,
    },
    isBorderless: {
      type: Boolean,
      required: false,
    },
    // Used when confirming a deletion.
    isDanger: {
      type: Boolean,
      default: false,
    },
    // Used when for a less intrusive danger button.
    isDangerLight: {
      type: Boolean,
      default: false,
    },
    isPrimary: {
      type: Boolean,
      required: false,
    },
    isSecondary: {
      type: Boolean,
      required: false,
    },
    isHighlight: {
      type: Boolean,
      required: false,
    },
    small: {
      type: Boolean,
      required: false,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
    isFlat: {
      type: Boolean,
      required: false,
    },
    tile: {
      type: Boolean,
      required: false,
      default: false,
    },
    isText: {
      type: Boolean,
      required: false,
    },
  })

  defineEmits<{
    (e: 'click', event: MouseEvent): void
    (e: 'mousedown', event: MouseEvent): void
    (e: 'mouseleave', event: MouseEvent): void
    (e: 'mouseup', event: MouseEvent): void
    (e: 'touchcancel', event: TouchEvent): void
    (e: 'touchend', event: TouchEvent): void
    (e: 'touchstart', event: TouchEvent): void
  }>()

  const slots = useSlots()
  const hasIconPrefix = computed<boolean>((): boolean => {
    return Boolean(slots.iconPrefix)
  })
  const hasIconSuffix = computed<boolean>((): boolean => {
    return Boolean(slots.iconSuffix)
  })
</script>

<style lang="scss">
  @import './the-button';
</style>
