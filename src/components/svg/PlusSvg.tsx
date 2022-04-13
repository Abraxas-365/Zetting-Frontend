import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const PlusButtonSvg = (props: any) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} {...props}>
        <G fill="none" stroke="#e5e1f6" data-name="Group 15">
            <G data-name="Ellipse 2">
                <Circle cx={19} cy={19} r={19} stroke="none" />
                <Circle cx={19} cy={19} r={18} />
            </G>
            <G data-name="Group 10">
                <Path d="M18.715 9.14v19.15" data-name="Line 12" />
                <Path d="M28.289 18.715H9.139" data-name="Line 13" />
            </G>
        </G>
    </Svg>
)

export default PlusButtonSvg
