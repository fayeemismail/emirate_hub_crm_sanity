import { defineType } from 'sanity'
import { HexColorInput } from '../components/HexColorInput'

export const hexColor = defineType({
  name: 'hexColor',
  title: 'Hex Color',
  type: 'string',
  components: {
    input: HexColorInput,
  },
  validation: (Rule) =>
    Rule.custom((value) => {
      if (!value) return true
      const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/
      return hexRegex.test(value)
        ? true
        : 'Please enter a valid Hex color code starting with # (e.g. #081D39, #38BDF8, #10B981)'
    }),
})
