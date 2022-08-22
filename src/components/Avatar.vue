<template>
  <img
    class="avatar-img"
    :src="url"
    alt="Avatar"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  name: "AvatarComponent",
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scope>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
