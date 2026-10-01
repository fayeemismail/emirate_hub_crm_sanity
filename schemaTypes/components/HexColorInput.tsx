import React, { useCallback } from 'react'
import { StringInputProps, set, unset } from 'sanity'
import { Card, Flex, TextInput, Box, Text } from '@sanity/ui'

export function HexColorInput(props: StringInputProps) {
  const { value, onChange, readOnly } = props

  // When user picks a color via native color picker
  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.value.toUpperCase()
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  // When user types or pastes hex code into text input
  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let nextValue = e.target.value.trim()
      if (nextValue && !nextValue.startsWith('#') && /^[0-9A-Fa-f]+$/.test(nextValue)) {
        nextValue = `#${nextValue}`
      }
      onChange(nextValue ? set(nextValue.toUpperCase()) : unset())
    },
    [onChange]
  )

  // Ensure valid 6-digit hex code for <input type="color">
  const cleanHex = value ? value.replace(/[^0-9A-Fa-f]/g, '') : ''
  let colorPickerHex = '#000000'
  if (cleanHex.length === 6) {
    colorPickerHex = `#${cleanHex}`
  } else if (cleanHex.length === 3) {
    colorPickerHex = `#${cleanHex[0]}${cleanHex[0]}${cleanHex[1]}${cleanHex[1]}${cleanHex[2]}${cleanHex[2]}`
  } else if (cleanHex.length === 8) {
    colorPickerHex = `#${cleanHex.substring(0, 6)}`
  }

  return (
    <Card>
      <Flex align="center" gap={3}>
        {/* Interactive Color Picker Box */}
        <Box
          style={{
            position: 'relative',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '2px solid rgba(147, 197, 253, 0.4)',
            backgroundColor: value || '#07172e',
            flexShrink: 0,
            cursor: readOnly ? 'default' : 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
          }}
          title="Click to open color picker"
        >
          <input
            type="color"
            value={colorPickerHex}
            onChange={handleColorChange}
            disabled={readOnly}
            style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '75px',
              height: '75px',
              border: 'none',
              cursor: readOnly ? 'default' : 'pointer',
              opacity: 0,
            }}
          />
        </Box>

        {/* Text Input to Directly Type / Paste Hex Hashcode */}
        <Box flex={1}>
          <TextInput
            value={value || ''}
            onChange={handleTextChange}
            placeholder="#07172E"
            disabled={readOnly}
            fontSize={2}
            style={{
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          />
        </Box>

        {/* Visual Hashcode Tag */}
        {value && (
          <Box
            paddingX={2}
            paddingY={1}
            style={{
              borderRadius: '6px',
              backgroundColor: 'rgba(147, 197, 253, 0.1)',
              border: '1px solid rgba(147, 197, 253, 0.2)',
            }}
          >
            <Text size={1} weight="bold" style={{ fontFamily: 'monospace', color: value }}>
              {value}
            </Text>
          </Box>
        )}
      </Flex>
    </Card>
  )
}
