import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

// void main() {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class Data {
  final int userId;
  final int id;
  final String title;

  Data({required this.userId, required this.id, required this.title});

  factory Data.fromJson(Map<String, dynamic> json) {
    return Data(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
    );
  }
}

Future<List<Data>> fetchData() async {
  final response =
      await http.get(Uri.parse('https://jsonplaceholder.typicode.com/albums'));
  if (response.statusCode == 200) {
    List jsonResponse = json.decode(response.body);
    return jsonResponse.map((data) => new Data.fromJson(data)).toList();
  } else {
    throw Exception('Unexpected error occured!');
  }
}

class MyApp extends StatefulWidget {
  MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late Future<List<Data>> futureData;

  @override
  void initState() {
    super.initState();
    futureData = fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter API and ListView Example',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter ListView'),
        ),
        body: Center(
          child: FutureBuilder<List<Data>>(
            future: futureData,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                List<Data>? data = snapshot.data;
                return ListView.builder(
                    itemCount: data!.length,
                    itemBuilder: (BuildContext context, int index) {
                      var container = Container(
                        height: 75,
                        color: Colors.white,
                        child: Center(
                          child: Text(data[index].title),
                        ),
                      );
                      return container;
                    });
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              // By default show a loading spinner.
              return CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}
