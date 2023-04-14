import { View, StyleSheet, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faInstagram, faFacebook, faLinkedin, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { Colors, globalStyles } from '../global-styles';
import { RecentTransactions, TodayDate, TransactionType, Vendor } from '../common/constants';

export default function HomePage() {

    const TransactionListHeader = () => {
        return (
            <Text style={globalStyles.mediumTitle}>Recent Transactions</Text>   
        )
    }

    const ListItemSeparator = () => {
        return (
            <View style={styles.itemSeparator}></View>
        )
    }

    const TransactionListFooter = () => {
        return (
            <Text style={globalStyles.mediumTitle}></Text>   
        )
    }

    const TransactionItem = (props) => {
        return (
            <View style={styles.transactionItem} key={props.item.key}>
                
                {GetIcon(props.item.vendor)}

                <View style={globalStyles.flexStart}>
                    <Text style={[globalStyles.regularTitle, globalStyles.bold]}>{props.item.vendor}</Text>
                    <Text style={globalStyles.lightSmallText}>{props.item.date}</Text>
                </View>

                <View style={globalStyles.flexEnd}>
                    <Text style={globalStyles.bold}>
                        {'$' + props.item.amount}
                    </Text>
                    <Text style={[globalStyles.lightSmallText]}>
                        { props.item.transactionType === TransactionType.dr ? 'Paid' : 'Received' }
                    </Text>
                </View>
            </View>
        )
    }

    const RenderItem = ({item}) => {
        
    }

    const GetIcon = (vendor) => {
        switch(vendor) {
            case Vendor.apple:
                return (
                    <FontAwesomeIcon icon={faApple} style={styles.vendorIcon}></FontAwesomeIcon>
                );
            case Vendor.linkedin:
                return (
                    <FontAwesomeIcon icon={faLinkedin} style={styles.vendorIcon}></FontAwesomeIcon>
                );
            case Vendor.instagram:
                return (
                    <FontAwesomeIcon icon={faInstagram} style={styles.vendorIcon}></FontAwesomeIcon>
                );
            case Vendor.facebook:
                return (
                    <FontAwesomeIcon icon={faFacebook} style={styles.vendorIcon}></FontAwesomeIcon>
                );
            case Vendor.visa:
                return (
                    <FontAwesomeIcon icon={faCcVisa} style={styles.vendorIcon}></FontAwesomeIcon>
                );
        }
    }

    return (
        <View style={styles.homeContainer}>
        
            <View style={styles.balance}>
                <Text style={globalStyles.lightText}>Current balance</Text>
                <Text style={globalStyles.bigTitle}>$54,555.56</Text>

                <Text style={globalStyles.lightText}>
                    {'Today ' + TodayDate()}
                </Text>
            </View>

            <View style={[styles.transactionList, globalStyles.fullWidth]}>
                <View style={[globalStyles.fullWidth, styles.transactionItemsContainer]}>
                        <FlatList
                            data={RecentTransactions}
                            renderItem={TransactionItem}
                            ListHeaderComponent={TransactionListHeader}
                            ListFooterComponent={TransactionListFooter}
                            ItemSeparatorComponent={ListItemSeparator}
                            keyExtractor={item => item.id}>
                        </FlatList>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    transactionItemsContainer: {
        backgroundColor: Colors.ListBackground,
        borderRadius: 20,
        height: '60vh',
        padding: 15
    },
    balance: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    transactionList: {
        paddingTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    },
    transactionItem: {
        display: 'grid',
        gridTemplateColumns: '20% 40% 40%',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
        width: '100%',
        paddingRight: 25,
        // paddingBottom: 15,
        // borderColor: Colors.LightGray,
        // borderBottomWidth: 1
    },
    itemSeparator: {
        height: 1,
        backgroundColor: Colors.LightGray,
        // marginHorizontal: 10
        marginVertical: 5
    },
    vendorIcon: {
        fontSize: 35
    }
});
