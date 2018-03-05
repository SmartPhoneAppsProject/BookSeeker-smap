import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native';

import ListView from './ListView';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      searchText: '',
      tmpBooks: this.props.tmpBooks,
      books: this.props.books,
    };

    this.search = this.search.bind(this);
  }

  cancel() {
    this.setState({ searchText: '' });
    this.props.setBooksOnList(this.props.books)
  }

  search() {
    console.log(this.props.books);
    const queries = this.state.searchText.split(' ') //searchText 'j' => '', searchText 'jj' => 'j'
    let books = this.props.books;
    let results = [];
    let tmpArray = [];
    // let set = new Set();

    for (let query of queries) {
      if (query) { //比較する文字列があるか
        if ('#' == query.charAt(0)) { //tagのとき
          for (let book of books) {
            for (let tag of book.tags) {
              if (tag.name.toLowerCase().includes(query.replace('#', '').toLowerCase())) {
                tmpArray.push(book);
              }
            }
          }
          results = Array.from(new Set(tmpArray)); //配列の重複を取り除く
        } else { //titleのとき
          results = [];
          for (let book of books) {
            if (book.title.toLowerCase().includes(query.toLowerCase())) {
              results.push(book);
            }
          }
          books = results;
        }
      }
    }

    this.setState({ books: results });
    this.props.setBooksOnList(results);
  }

  render() {
    const cancelButton = this.state.searching
      ? <Button style={styles.button}
        onPress={() => {
          this.setState({ searching: false })
          this.cancel();
        }}
        title='キャンセル' />
      : <View />
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          onChangeText={(searchText) => {
            this.setState({ searchText, searching: true });
            this.search();
          }}
          value={this.state.searchText}
          placeholder='検索' />
        {cancelButton}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: 'row',
  },
  input: {
    flex: 8,
  },
  button: {
    flex: 2,
  },
});
