<template>
  <div class="table-box">
    <table>
      <thead>
        <slot name="thead"></slot>
      </thead>
      <tbody>
        <slot name="tbody"></slot>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, toRefs, ref } from "vue";
</script>
<style lang="scss">
  .table-box {
    height: 100%;
    table {
      width: 100%;
      height: 100%;
      overflow: hidden;
      tr {
        th {
          background-color: rgb(244, 246, 248);
        }
        th,
        td {
          box-sizing: border-box;
          white-space: nowrap;
          padding: 20px;
          text-align: left;
          color: rgb(33, 43, 54);
          font-weight: bold;
          .remove-button,
          .setting-button {
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
    tbody {
      // overflow-y: scroll;
      //overflow-x: hidden;
      display: block;
      height: calc(100% - 56px);
      overflow-y: scroll;
      tr {
        display: table;
        table-layout: fixed;
        width: 100%;
        border-bottom: 1px solid rgba(145, 158, 171, 0.24);
        &:hover {
          background-color: #e9f4ff;
        }
      }
    }
    thead {
      width: 100%;
      position: relative;
      display: table;
      table-layout: fixed;
      tr {
        th {
          &:last-child {
            &::after {
              content: " ";
              position: absolute;
              background-color: rgb(244, 246, 248);
              width: 1.3em;
              height: 56px;
              right: -1.3em;
              top: 0;
            }
          }
        }
      }
    }
  }
</style>
