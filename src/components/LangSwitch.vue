<template>
  <q-btn-dropdown
    unelevated rounded no-wrap split
    color="secondary"
    style="min-width: 125px;"
    :toggle-aria-label="$t('ui.ariaLabel_langSwitch')"
  >
    <template v-slot:label>
      <span class="q-ml-sm">{{ locale }}</span>
    </template>

    <q-list style="min-width: 200px;">
      <q-item
        clickable v-close-popup
        v-for="option in localeOptions" :key="option.value"
        @click="setLocale(option.value)"
      >
        <q-item-section>{{ option.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    const setLocale = (newLocale) => {
      locale.value = newLocale
    }

    return {
      setLocale,
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'pt-BR', label: 'Português' }
      ]
    }
  }
}
</script>
