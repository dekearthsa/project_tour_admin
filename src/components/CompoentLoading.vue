<template>
    <div class="loading">
        <h2>login.........</h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h2 {
    color: #ccc;
    margin: 0;
    font: .8em verdana;
    text-transform: uppercase;
    letter-spacing: .1em;
}
.loading span {
    display: inline-block;
    vertical-align: middle;
    width: .6em;
    height: .6em;
    margin: .19em;
    background: #ffffff;
    border-radius: .6em;
    animation: loading 1s infinite alternate;
}

.loading span:nth-of-type(2) {
    background: #c4c4c4;
    animation-delay: 0.2s;
}
.loading span:nth-of-type(3) {
    background: #787878;
    animation-delay: 0.4s;
}
.loading span:nth-of-type(4) {
    background: #5d5d5d;
    animation-delay: 0.6s;
}
.loading span:nth-of-type(5) {
    background: #434343;
    animation-delay: 0.8s;
}
.loading span:nth-of-type(6) {
    background: #2d2d2d;
    animation-delay: 1.0s;
}
.loading span:nth-of-type(7) {
    background: #000000;
    animation-delay: 1.2s;
}

@keyframes loading {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>