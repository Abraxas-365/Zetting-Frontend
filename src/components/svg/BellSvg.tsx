import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

type Props = {
    color?: string
    border?: string
    width?: any
    height?: any
}
export const BellSvgInactive = ({ color = "white", width = 12, height = 14 }: Props) => (
    <Svg
        width={width}
        height={height}
    >
        <G data-name="Group 759" fill={color}>
            <G data-name="Group 757">
                <Path
                    data-name="Path 13"
                    d="M10.319 5.821c-.131-.626-.281-1.336-.362-2.038a4.305 4.305 0 0 0-8.546 0c-.08.693-.224 1.377-.36 2.03L0 10.408h11.369ZM1.197 9.453l.786-3.435c.136-.652.291-1.39.376-2.125a3.351 3.351 0 0 1 6.65 0c.086.745.24 1.478.377 2.133l.783 3.427Z"
                />
                <Path
                    data-name="Path 14"
                    d="M7.842 11.54H3.526a.477.477 0 0 0 0 .955h4.315a.477.477 0 0 0 0-.955"
                />
            </G>
            <Path
                data-name="Path 470"
                d="M.846 9.772h9.839L9.413 3.597l-.462-1.446L7.231.763 4.807.528l-1.976 1.3-.961 1.771Z"
            />
        </G>
    </Svg>
)


export const BellSvgActive = ({ color = "white", border = "black", width = 11.62, height = 12.62 }: Props) => (
    <Svg
        width={width}
        height={height}
    >
        <G data-name="Group 763" fill={color} stroke={border} strokeWidth={0.2}>
            <Path
                data-name="Path 13"
                d="M10.444 5.922c-.131-.626-.281-1.336-.362-2.038a4.305 4.305 0 0 0-8.546 0c-.08.693-.224 1.377-.36 2.03L.125 10.509h11.369ZM1.322 9.554l.786-3.435c.136-.652.291-1.39.376-2.125a3.351 3.351 0 0 1 6.65 0c.086.745.24 1.478.377 2.133l.783 3.427Z"
            />
            <Path
                data-name="Path 14"
                d="M7.967 11.641H3.651a.477.477 0 0 0 0 .955h4.315a.477.477 0 0 0 0-.955"
            />
        </G>
    </Svg>
)

export const Bell = ({ color = "white", width = 16.766, height = 18.437 }: Props) => (
    <Svg
        width={width}
        height={height}
    >
        <G data-name="Group 28" fill={color}>
            <Path
                data-name="Path 13"
                d="M15.218 8.582c-.193-.923-.414-1.97-.534-3.006a6.349 6.349 0 0 0-12.6 0c-.118 1.021-.33 2.031-.531 2.994l-1.55 6.776h16.763ZM1.766 13.937l1.159-5.066c.2-.961.429-2.049.554-3.133a4.942 4.942 0 0 1 9.807 0c.126 1.1.353 2.18.557 3.145l1.155 5.054Z"
            />
            <Path
                data-name="Path 14"
                d="M11.563 17.019H5.2a.704.704 0 0 0 0 1.408h6.363a.704.704 0 0 0 0-1.408"
            />
        </G>
    </Svg>
)
