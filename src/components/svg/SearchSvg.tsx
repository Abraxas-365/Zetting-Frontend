import * as React from "react"
import Svg, { G, Text, TSpan, Path } from "react-native-svg"


type Props = {
    color?: string
    border?: string
    width?: any
    height?: any
}
export const SearchSvg = ({ color = "#e5e1f6", width = 16.807, height = 18.393 }: Props) => (
    <Svg
        width={width}
        height={height}
    >
        <Path
            data-name="Path 12"
            d="m16.652 17.249-4.59-5.734a6.935 6.935 0 1 0-1.042.951l4.532 5.663a.704.704 0 1 0 1.1-.88M1.408 6.915a5.507 5.507 0 1 1 5.507 5.507 5.514 5.514 0 0 1-5.507-5.507"
            fill={color}
        />
    </Svg>
)


export default SearchSvg
