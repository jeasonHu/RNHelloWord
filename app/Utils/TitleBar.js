import React, {
    Component
} from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableOpacity,
}
    from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

let height = 55;
let width = 50;

//工具栏
export default class TitleBar extends Component {



    static defaultProps = {
        backgroundColor: '',
        leftIcon: '',
        leftIconcolor: '',
        textcontent: ' ',
        textcolor: '',
        rightIcon: '',
        rightIconcolor: '',


        defaultTextcolor: '#757575',
    }

    static propTypes = {
        backgroundColor: React.PropTypes.string,
        leftIcon: React.PropTypes.string,
        textcontent: React.PropTypes.string,
        textcontentPos: React.PropTypes.string,
        rightIcon: React.PropTypes.string,

        leftClick: React.PropTypes.func, // 左边按钮
        rightClick: React.PropTypes.func, // 左边按钮 
    }

    render() {

        //ios-menu
        // Right Icon
        let rightIconhide = false;
        if (this.props.rightIcon) {
            rightIconhide = true;
        } else {
            rightIconhide = false;
        }
        let RIconcolor = '#36bfd1'
        if (this.props.rightIconcolor) {
            RIconcolor = this.props.rightIconcolor;
        }



        // Left Icon
        let leftIconnull = false;
        if (this.props.leftIcon) {
            leftIconnull = false;
        } else {
            leftIconnull = true;
        }

        let LIconcolor = '#36bfd1'
        if (this.props.leftIconcolor) {
            LIconcolor = this.props.leftIconcolor;
        }


        let TextcolorNull = false;
        if (this.props.textcolor) {
            TextcolorNull = false;
        } else {
            TextcolorNull = true;
        }

        let bgBar = '#ffffff';
        if (this.props.backgroundColor) {
            bgBar = this.props.backgroundColor;
        }

        return (
            <View style={{ height: height + 1, flexDirection: 'column', }}>
                
                <View style={[styles.titlebar, { backgroundColor: bgBar }]}>
                    <View style={styles.titlebar_content}>
                        <View style={styles.titlebar_itemleft} />

                        {
                            TextcolorNull ?
                                <Text numberOfLines={1}
                                    style={[styles.titlebar_textcontent, { color: this.props.defaultTextcolor }]}>{this.props.textcontent}</Text>
                                : <Text numberOfLines={1}
                                    style={[styles.titlebar_textcontent, { color: this.props.textcolor }]}>{this.props.textcontent}</Text>
                        }


                        {
                            rightIconhide ?
                                <View style={styles.titlebar_itemright} />
                                : <View />
                        }

                    </View>




                    <View style={styles.titlebar_item}>

                        <TouchableOpacity onPress={this.props.leftClick} >
                            <View style={styles.titlebar_itemleft}>
                                {
                                    leftIconnull ?
                                        <Icon
                                            size={35}
                                            color={LIconcolor}
                                            name='ios-arrow-back' />
                                        : <Icon
                                            size={35}
                                            color={LIconcolor}
                                            name={this.props.leftIcon} />
                                }
                            </View>
                        </TouchableOpacity>

                        <View style={{ flex: 1 }} />

                        <TouchableOpacity onPress={this.props.rightClick} >
                            <View style={styles.titlebar_itemright}>
                                {
                                    rightIconhide ?
                                        <Icon style={{}}
                                            size={35}
                                            color={RIconcolor}
                                            name={this.props.rightIcon} />
                                        : <View />
                                }
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#e0e0e0' }} />



            </View>

        );
    }

}


const styles = StyleSheet.create({
    titlebar: {
        height: height,
        flexDirection: 'column',
    },

    titlebar_item: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
    },

    titlebar_itemleft: {
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titlebar_itemright: {
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },


    titlebar_content: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titlebar_textcontent: {
        flex: 1,
        fontSize: 17,
        marginRight: 20,
    },
});
