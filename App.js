import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
} from "react-native"; 

const ExpandableListItem = ({item})=>{

  const [expanded,setExpanded] = useState(false);
  const toggleExpand = ()=>{
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
      onPress={toggleExpand}
      style={styles.itemTouchable}
      ><Text style={styles.itemTitle}>
        {item.title}
      </Text>

      </TouchableOpacity>
      {expanded && (
        <Text style={styles.itemContent}>
          {item.content}

        </Text>
      )}

    </View>
  )
};

const ExpandableList = ({ data }) => { 
  const renderItem = ({ item }) => ( 
      <ExpandableListItem item={item} /> 
  ); 

  return ( 
      <FlatList 
          data={data} 
          renderItem={renderItem} 
          keyExtractor={(item) => item.id.toString()} 
      /> 
  ); 
}; 



const App = () => {
  const data = [ 
    { 
        id: 1, 
        title: "What Is Javascript", 
        content: 
            `JavaScript (JS) is the most popular  
            lightweight, interpreted compiled  
            programming language. It can be used  
            for both Client-side as well as  
            Server-side developments. JavaScript  
            also known as a scripting language  
            for web pages.`, 
    }, 
    { 
        id: 2, 
        title: "Geeksforgeeks", 
        content: 
            `A Computer Science portal for geeks.  
            It contains well written, well thought  
            and well explained computer science and  
            programming articles`, 
    }, 
    { 
        id: 2, 
        title: "What Is Python", 
        content: 
            `Python is a high-level, general-purpose,  
            and very popular programming language.  
            Python programming language (latest  
            Python 3) is being used in web development,  
            Machine Learning applications, along with 
            all cutting-edge technology in Software  
            Industry.`, 
    }, 
    // ...more items 
]; 
  return (
    <View style={styles.container}> 
    <Text style={styles.header}> 
        Geek Learn 
    </Text> 
    <Text style={styles.subheader}> 
        Expandable List View 
    </Text> 
    <ExpandableList data={data} /> 
</View> 
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },

  itemTouchable:{
    borderRadius:10,
    overflow:"hidden"

  },

  itemTitle:{
    fontSize:18,
    fontWeight:"bold",
    color:"#333"
  },
  header:{
    fontSize:30,
    fontWeight:"bold"
  },

  itemContent:{
    marginTop:10,
    fontSize: 14, 
     color: "#666", 
  },
  itemContainer: { 
    marginBottom: 15, 
    padding: 10, 
    backgroundColor: "white", 
    borderRadius: 10, 
    elevation: 3, 
}, 
subheader: { 
  fontSize: 20, 
  fontWeight: "bold", 
  marginBottom: 20, 
  textAlign: "center", 
},

});
