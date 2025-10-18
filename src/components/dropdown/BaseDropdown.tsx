import React, { useMemo } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useTranslation } from 'react-i18next';
import { useThemeColor } from '@/hooks/useThemeColor';
import { BaseDropdownProps } from './types';
import BaseText from '@/components/text/BaseText';
import { dropdown as dropdownSizes, spacing } from '@/config/sizes';

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  label,
  error,
  helperText,
  required = false,
  containerClassName = '',
  labelClassName = '',
  dropdownClassName = '',
  errorClassName = '',
  helperClassName = '',
  leftIcon,
  rightIcon,
  data,
  value,
  onChange,
  placeholder,
  search = false,
  searchPlaceholder,
  labelField = 'label',
  valueField = 'value',
  disable = false,
  ...dropdownProps
}) => {
  const { t } = useTranslation();

  // Theme colors
  const backgroundColor = useThemeColor('background');
  const textColor = useThemeColor('text');
  const placeholderColor = useThemeColor('inputPlaceholder');
  const borderColor = useThemeColor('border');
  const errorColor = useThemeColor('error');
  const errorBackgroundColor = useThemeColor('inputError');

  const themeColors = useMemo(
    () => ({
      background: backgroundColor,
      text: textColor,
      placeholder: placeholderColor,
      border: borderColor,
      error: errorColor,
      errorBackground: errorBackgroundColor,
    }),
    [backgroundColor, textColor, placeholderColor, borderColor, errorColor, errorBackgroundColor],
  );

  // Computed values
  const hasError = Boolean(error);
  const finalPlaceholder = placeholder || t('dropdown.selectOption');
  const finalSearchPlaceholder = searchPlaceholder || t('dropdown.search');

  // Dynamic styles based on state and props
  const dynamicStyles = useMemo(
    () => ({
      dropdown: {
        backgroundColor: hasError ? themeColors.errorBackground : themeColors.background,
        borderColor: hasError ? themeColors.error : themeColors.border,
        paddingLeft: leftIcon ? dropdownSizes.iconPadding : dropdownSizes.paddingHorizontal,
        paddingRight: rightIcon ? dropdownSizes.iconPadding : dropdownSizes.paddingHorizontal,
      } as ViewStyle,
      placeholder: {
        color: themeColors.placeholder,
      } as TextStyle,
      selectedText: {
        color: themeColors.text,
      } as TextStyle,
      searchInput: {
        backgroundColor: themeColors.background,
        color: themeColors.text,
        borderColor: hasError ? themeColors.error : themeColors.border,
      } as ViewStyle,
      container: {
        backgroundColor: themeColors.background,
      } as ViewStyle,
      itemText: {
        color: themeColors.text,
      } as TextStyle,
      itemContainer: {
        backgroundColor: themeColors.background,
      } as ViewStyle,
    }),
    [hasError, leftIcon, rightIcon, themeColors],
  );

  return (
    <View className={containerClassName.trim()}>
      {/* Label */}
      {label && (
        <BaseText
          variant="label"
          color="foreground-secondary"
          className={`mb-1.5 ${labelClassName}`.trim()}
        >
          {label}
          {required && <BaseText text=" *" color="error" />}
        </BaseText>
      )}

      {/* Dropdown Container */}
      <View className={`relative ${dropdownClassName}`.trim()}>
        {/* Left Icon */}
        {leftIcon && <View className="absolute left-3 top-3 z-10">{leftIcon}</View>}

        {/* Dropdown */}
        <Dropdown
          style={[styles.dropdown, dynamicStyles.dropdown]}
          placeholderStyle={[styles.placeholderStyle, dynamicStyles.placeholder]}
          selectedTextStyle={[styles.selectedTextStyle, dynamicStyles.selectedText]}
          inputSearchStyle={[styles.inputSearchStyle, dynamicStyles.searchInput]}
          inputSearchContainerStyle={styles.inputSearchContainerStyle}
          iconStyle={styles.iconStyle}
          containerStyle={[styles.containerStyle, dynamicStyles.container]}
          itemTextStyle={[styles.itemTextStyle, dynamicStyles.itemText]}
          itemContainerStyle={[styles.itemContainerStyle, dynamicStyles.itemContainer]}
          activeColor={themeColors.placeholder}
          data={data}
          search={search}
          maxHeight={dropdownSizes.maxHeight}
          labelField={labelField}
          valueField={valueField}
          placeholder={finalPlaceholder}
          searchPlaceholder={finalSearchPlaceholder}
          value={value}
          onChange={onChange || (() => { })}
          disable={disable}
          {...dropdownProps}
        />

        {/* Right Icon */}
        {rightIcon && <View className="absolute right-3 top-3 z-10">{rightIcon}</View>}
      </View>

      {/* Error Message */}
      {error && (
        <BaseText
          text={error}
          variant="caption"
          color="error"
          className={`mt-1 ${errorClassName}`.trim()}
        />
      )}

      {/* Helper Text */}
      {helperText && !error && (
        <BaseText
          text={helperText}
          variant="caption"
          color="foreground-secondary"
          className={`mt-1 ${helperClassName}`.trim()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: dropdownSizes.height,
    borderWidth: dropdownSizes.borderWidth,
    borderRadius: dropdownSizes.borderRadius,
    paddingHorizontal: dropdownSizes.paddingHorizontal,
  },
  placeholderStyle: {
    fontSize: dropdownSizes.fontSize,
  },
  selectedTextStyle: {
    fontSize: dropdownSizes.fontSize,
  },
  inputSearchContainerStyle: {
    height: dropdownSizes.searchInputHeight,
    borderWidth: dropdownSizes.borderWidth,
    borderRadius: dropdownSizes.borderRadius,
  },
  inputSearchStyle: {
    fontSize: dropdownSizes.fontSize,
  },
  iconStyle: {
    width: dropdownSizes.iconSize,
    height: dropdownSizes.iconSize,
  },
  containerStyle: {
    borderRadius: dropdownSizes.borderRadius,
    marginTop: spacing[1],
    overflow: 'hidden',
  },
  itemTextStyle: {
    fontSize: dropdownSizes.fontSize,
  },
  itemContainerStyle: {
    paddingHorizontal: dropdownSizes.itemPaddingHorizontal,
    paddingVertical: dropdownSizes.itemPaddingVertical,
  },
});

export default BaseDropdown;

