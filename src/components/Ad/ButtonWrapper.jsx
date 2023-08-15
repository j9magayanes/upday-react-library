import React, { useRef, useEffect } from 'react';
import Vue from 'vue';
import Button from './Button.vue'; // Import your Vue component

const ButtonWrapper = () => {
  const vueContainerRef = useRef(null);

  useEffect(() => {
    const vm = new Vue({
      el: vueContainerRef.current,
      render: (h) => h(Button),
    });

    return () => {
      vm.$destroy();
    };
  }, []);

  return <div ref={vueContainerRef} />;
};

export default ButtonWrapper;
