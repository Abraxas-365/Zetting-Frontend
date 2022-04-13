import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

type Props = {
    color?: string
    border?: string
    width?: any
    height?: any
}
const HeardSvg = ({ color = "#e5e1f6", width = 18.566, height = 17.356 }: Props) => (

    <Svg
        width={width}
        height={height}
    >
        <Defs>
            <ClipPath id="a">
                <Path data-name="Rectangle 145" fill="none" d="M0 0h18.566v17.356H0z" />
            </ClipPath>
        </Defs>
        <G data-name="Group 136">
            <G data-name="Group 135" clipPath="url(#a)">
                <Path
                    data-name="Path 64"
                    d="M9.283 17.356 1.672 9.744A5.708 5.708 0 0 1 5.708 0a5.664 5.664 0 0 1 3.575 1.257 5.709 5.709 0 0 1 7.612 8.487ZM5.708 1.305A4.4 4.4 0 0 0 2.6 8.822l6.683 6.688 6.689-6.688A4.401 4.401 0 0 0 9.745 2.6l-.462.461-.461-.461a4.374 4.374 0 0 0-3.113-1.29"
                    fill={color}
                />
            </G>
        </G>
    </Svg>
)

export default HeardSvg
