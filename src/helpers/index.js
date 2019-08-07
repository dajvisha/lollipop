const constants = {
  GRADIENT_TYPE: {
    LINEAR: 'linear-gradient',
    RADIAL: 'radial-gradient',
  },
  GRADIENT_DIRECTION: {
    LINEAR: {
      TOP: 'to top',
      LEFT: 'to left',
      RIGHT: 'to right',
      BOTTOM: 'to bottom',
      TOP_LEFT: 'to top left',
      TOP_RIGHT: 'to top right',
      BOTTOM_LEFT: 'to bottom left',
      BOTTOM_RIGHT: 'to bottom right'
    },
    RADIAL: {
      TOP: 'at 50% 0%',
      LEFT: 'at 0% 50%',
      RIGHT: 'at 100% 50%',
      BOTTOM: 'at 50% 100%',
      CENTER: 'at 50% 50%',
      TOP_LEFT: 'at 0% 0%',
      TOP_RIGHT: 'at 100% 0%',
      BOTTOM_LEFT: 'at 0% 100%',
      BOTTOM_RIGHT: 'at 100% 100%'
    }
  }
}

export default constants;
