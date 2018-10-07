<template>
    <div>
        <h1 v-text="title"></h1>
        <input v-model="msg">
        <button @click="clickMe">click!</button>
        <p>{{fromChild}}</p>
        <button @click="tellFather">tellFather!</button>
    </div>
</template>

<script>
    export default{
        name:"compontentA",
        data(){
            return {
                title:"hello i am a child",
                msg:""
            }
        },
        props:["fromChild"],
        methods:{
            clickMe(){
                console.log(this.fromChild);
            },
            tellFather(){
                this.$emit("fromChildCom",this.msg)
            }
        }
    }
</script>