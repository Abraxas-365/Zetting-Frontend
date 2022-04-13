
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"
type Props = {
    color?: string
    border?: string
    width?: any
    height?: any
}
export const ZettingSVG = ({ color = "#e5e1f6", width = 18.512, height = 21.157 }: Props) => (
    <Svg
        width={width}
        height={height}
    >
        <Defs>
            <ClipPath id="a">
                <Path
                    data-name="Rectangle 293"
                    fill={color}
                    d="M0 0h18.512v21.157H0z"
                />
            </ClipPath>
        </Defs>
        <G data-name="Group 824" clipPath="url(#a)" fill={color}>
            <Path
                data-name="Path 534"
                d="M0 21.156V7.585a4.941 4.941 0 0 1 4.941-4.941h5.638L3.687 18.725A4.012 4.012 0 0 1 0 21.156"
            />
            <Path
                data-name="Path 535"
                d="M18.512 0v13.571a4.941 4.941 0 0 1-4.941 4.941H7.933l6.893-16.081A4.01 4.01 0 0 1 18.512 0"
            />
        </G>
    </Svg>
)
