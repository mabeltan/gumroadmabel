import { PrismicLink, PrismicText } from '@prismicio/react'

export function Navigation({ navigation }) {
  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicText field={slice.primary.name} />
              </PrismicLink>

              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item, i) => {
                    return (
                      <li key={i}>
                        <PrismicLink field={item.link}>
                          <PrismicText field={item.name} />
                        </PrismicLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}