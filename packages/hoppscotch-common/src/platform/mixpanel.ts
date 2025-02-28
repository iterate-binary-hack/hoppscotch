import mixpanel from "mixpanel-browser"

export const initMixpanel = () => {
  mixpanel.init("mixpanel-token")
}

export const logEvent = (event: string, properties?: Record<string, unknown>) => {
  mixpanel.track(event, properties)
}

export const identify = (id: string) => {
  mixpanel.identify(id)
}

