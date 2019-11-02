import 'package:flutter/material.dart';
import 'package:beauty_textfield/beauty_textfield.dart';
import 'package:beauty_textfield/flutter_show_more.dart';

import 'package:translator/translator.dart';
import 'package:http/http.dart' as http;
import 'dart:convert' show json;

void main() {
  runApp(MaterialApp(
    home: Main(),
    debugShowCheckedModeBanner: false,
    theme: ThemeData.dark(),
  ));
}

class Main extends StatefulWidget {
  @override
  _MainState createState() => _MainState();
}

String veryLongText2 ="null";
String doctor_result_1 = "null";
String doctor_result_2 = "null";
String doctor_result_3 = "null";
String doctor_result_4 = "null";
String doctor_result_5 = "null";
String doctor_result_6 = "null";
String doctor_result_7 = "null";
String doctor_result_8 = "null";
String doctor_result_9 = "null";
String doctor_result_10 = "null";

var finish1 = 0;
var finish2 = 0;
var finish3 = 0;
var finish4 = 0;
var finish5 = 0;
var finish6 = 0;
var finish7 = 0;
var finish8 = 0;
var finish9 = 0;
var finish10 = 0;

bool isLoading = false;

bool _loadingInProgress = true;

var length = 0;

Widget _buildBody() {
  if (_loadingInProgress) {
    return new Center(
      child: new SimpleDialog(
        elevation: 0.0,
        backgroundColor: Colors.transparent,
        children: <Widget>[
          Center(
            child: CircularProgressIndicator(),
          )
        ],
      ),
    );

  } else {
    return new Center (
      child: new Text('Data loaded'),
    );
  }
}


class _MainState extends State<Main> {

  Future _loadData() async {
    await new Future.delayed(new Duration(seconds: 5));
    Navigator.pop(context);
    _dataLoaded();
  }

  void _dataLoaded() {
    setState(() {
      _loadingInProgress = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text('国际私人医生'),
      ),
      body: Container(
          padding: EdgeInsets.only(top: 10),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[

              BeautyTextfield(
                width: double.maxFinite,
                height: 500,
                maxLines: 50,
                maxLength:500,
                duration: Duration(milliseconds: 300),
                inputType: TextInputType.text,
                prefixIcon: Icon(
                  Icons.security,
                ),
                //suffixIcon: Icon(Icons.local_hospital),
                placeholder: "输入病情",
                onTap: () {
                  print('Click');

                },
                onChanged: (t) {
                  print(t);
                },
                onSubmitted: (d) async {
                  if( d.length != 0)
                  {

                    setState((){length=d.length;});
                    //_loadData();
                    final translator = new GoogleTranslator();
                    var result = await translator.translate(d, from: 'zh-cn', to: 'en');

                    setState((){veryLongText2=result;});

                    var url ='http://1632a514z1.imwork.net:10331/predict';

                    Map data = {
                      'apikey': result
                    };
                    //encode Map to JSON
                    var body = json.encode(data);

                    var response = await http.post(url,
                        headers: {"Content-Type": "application/json"},
                        body: body
                    );
                    print("${response.statusCode}");
                    print("${response.body}");
                    //return response;
                    var body_return = json.decode(response.body);
                    print(body_return[0]);
                    var doctor_result_1_ = "null" ;
                    await translator.translate(body_return[0], from: 'en', to: 'zh-cn').then((doctor_result_1_)=>setState((){doctor_result_1=doctor_result_1_; finish1 = 1;}));
                    print("========1=======");
                    print(doctor_result_1);
                    print(body_return[1]);
                    if(doctor_result_1 == null ){         print("=====null===1=======");           print(doctor_result_1); doctor_result_1 = 'null';}
                    var doctor_result_2_ = "null" ;
                    await translator.translate(body_return[1], from: 'en', to: 'zh-cn').then((doctor_result_2_)=>setState((){doctor_result_2=doctor_result_2_;finish2 = 1;}));
                    print("========2=======");
                    print(doctor_result_2);
                    print(body_return[2]);
                    if(doctor_result_2 == null ){         print("======null==2=======");              print(doctor_result_2);doctor_result_2 = 'null';}
                    var doctor_result_3_ = "null" ;
                    await translator.translate(body_return[2], from: 'en', to: 'zh-cn').then((doctor_result_3_)=>setState((){doctor_result_3=doctor_result_3_;finish3 = 1;}));
                    print("========3=======");
                    print(doctor_result_3);
                    print(body_return[3]);
                    if(doctor_result_3 == null ){         print("===null=====3=======");              print(doctor_result_3);doctor_result_3 = 'null';}
                    var doctor_result_4_ = "null" ;
                    await translator.translate(body_return[3], from: 'en', to: 'zh-cn').then((doctor_result_4_)=>setState((){doctor_result_4=doctor_result_4_;finish4 = 1;}));
                    print("========4=======");
                    print(doctor_result_4);
                    print(body_return[4]);
                    if(doctor_result_4 == null ){         print("=====null===4=======");              print(doctor_result_4);doctor_result_4 = 'null';}
                    var doctor_result_5_ = "null" ;
                    await translator.translate(body_return[4], from: 'en', to: 'zh-cn').then((doctor_result_5_)=>setState((){doctor_result_5=doctor_result_5_;finish5 = 1;}));
                    print("========5=======");
                    print(doctor_result_5);
                    print(body_return[5]);
                    if(doctor_result_5 == null ){         print("=====null===5=======");              print(doctor_result_5);doctor_result_5 = 'null';}
                    var doctor_result_6_ = "null" ;
                    await translator.translate(body_return[5], from: 'en', to: 'zh-cn').then((doctor_result_6_)=>setState((){doctor_result_6=doctor_result_6_;finish6 = 1;}));
                    print("========6=======");
                    print(doctor_result_6);
                    print(body_return[6]);
                    if(doctor_result_6 == null ){         print("====null====6=======");              print(doctor_result_6);doctor_result_6 = 'null';}
                    var doctor_result_7_ = "null" ;
                    await translator.translate(body_return[6], from: 'en', to: 'zh-cn').then((doctor_result_7_)=>setState((){doctor_result_7=doctor_result_7_;finish7 = 1;}));
                    print("========7=======");
                    print(doctor_result_7);
                    print(body_return[7]);
                    if(doctor_result_7 == null ){          print("====null====7=======");             print(doctor_result_7);doctor_result_7 = 'null';}
                    var doctor_result_8_ = "null" ;
                    await translator.translate(body_return[7], from: 'en', to: 'zh-cn').then((doctor_result_8_)=>setState((){doctor_result_8=doctor_result_8_;finish8 = 1;}));
                    print("========8=======");
                    print(doctor_result_8);
                    print(body_return[8]);
                    if(doctor_result_8 == null ){          print("====null====8=======");             print(doctor_result_8);doctor_result_8 = 'null';}
                    var doctor_result_9_ = "null" ;
                    await translator.translate(body_return[8], from: 'en', to: 'zh-cn').then((doctor_result_9_)=>setState((){doctor_result_9=doctor_result_9_;finish9 = 1;}));
                    print("========9=======");
                    print(doctor_result_9);
                    print(body_return[9]);
                    if(doctor_result_9 == null ){           print("=====null===9=======");            print(doctor_result_9);doctor_result_9 = 'null';}
                    var doctor_result_10_ = "null" ;
                    await translator.translate(body_return[9], from: 'en', to: 'zh-cn').then((doctor_result_10_)=>setState((){doctor_result_10=doctor_result_10_;finish10 = 1;}));
                    print("========10=======");
                    print(doctor_result_10);
                    print(body_return[10]);
                    if(doctor_result_10 == null ){          print("====null====10=======");             print(doctor_result_10);doctor_result_10 = 'null';}

                    /*
                    var doctor_result_2_ = await translator.translate(body_return[1], from: 'en', to: 'zh-cn');
                    var doctor_result_3_ = await translator.translate(body_return[2], from: 'en', to: 'zh-cn');
                    var doctor_result_4_ = await translator.translate(body_return[3], from: 'en', to: 'zh-cn');
                    var doctor_result_5_ = await translator.translate(body_return[4], from: 'en', to: 'zh-cn');
                    var doctor_result_6_ = await translator.translate(body_return[5], from: 'en', to: 'zh-cn');
                    var doctor_result_7_ = await translator.translate(body_return[6], from: 'en', to: 'zh-cn');
                    var doctor_result_8_ = await translator.translate(body_return[7], from: 'en', to: 'zh-cn');
                    var doctor_result_9_ = await translator.translate(body_return[8], from: 'en', to: 'zh-cn');
                    var doctor_result_10_ = await translator.translate(body_return[9], from: 'en', to: 'zh-cn');


                    //setState((){doctor_result_1=doctor_result_1_;});
                    setState((){doctor_result_2=doctor_result_2_;});
                    setState((){doctor_result_3=doctor_result_3_;});
                    setState((){doctor_result_4=doctor_result_4_;});
                    setState((){doctor_result_5=doctor_result_5_;});
                    setState((){doctor_result_6=doctor_result_6_;});
                    setState((){doctor_result_7=doctor_result_7_;});
                    setState((){doctor_result_8=doctor_result_8_;});
                    setState((){doctor_result_9=doctor_result_9_;});
                    setState((){doctor_result_10=doctor_result_10_;});
                    */
                  }
                  else
                    {
                    setState((){veryLongText2="null";});
                    }

                },
              ),
              FloatingActionButton(
                backgroundColor:const Color(0xff5c5bb0),
                child: const Icon(Icons.search),
                onPressed: () async {
                  //runApp( MaterialApp(
                  //                                  title: 'Navigation Basics',
                  //                                  home: FirstRoute() )
                  //),
                  if(finish1*finish2*finish3*finish4*finish5*finish6*finish7*finish8*finish9*finish10 == 1 ) {
                    Navigator.of(context).push(
                      new MaterialPageRoute(builder: (_) => new MyApp()),);

                    finish1 = 0;
                    finish2 = 0;
                    finish3 = 0;
                    finish4 = 0;
                    finish5 = 0;
                    finish6 = 0;
                    finish7 = 0;
                    finish8 = 0;
                    finish9 = 0;
                    finish10 = 0;



                  }
                  else
                    {


                      if(length ==0)
                        {
                          showDialog(
                            context: context,
                            builder: (BuildContext context) {
                              // return object of type Dialog
                              return AlertDialog(
                                title: new Text("提示"),
                                content: new Text("输入病的症状......"),
                                actions: <Widget>[
                                  // usually buttons at the bottom of the dialog
                                  new FlatButton(
                                    child: new Text("关闭"),
                                    onPressed: () {
                                      Navigator.of(context).pop();
                                    },
                                  ),
                                ],
                              );
                            },
                          );


                        }
                      else {
                        showDialog<Null>(
                            context: context,
                            barrierDismissible: false,
                            builder: (BuildContext context) {
                              return SimpleDialog(
                                elevation: 0.0,
                                backgroundColor: Colors.transparent,
                                children: <Widget>[
                                  Center(
                                    child: CircularProgressIndicator(),
                                  )
                                ],
                              );
                            });


                        await new Future.delayed(new Duration(seconds: 5));
                        Navigator.pop(context);
                        if (finish1 * finish2 * finish3 * finish4 * finish5 *
                            finish6 * finish7 * finish8 * finish9 * finish10 ==
                            1) {
                          Navigator.of(context).push(
                            new MaterialPageRoute(
                                builder: (_) => new MyApp()),);

                          finish1 = 0;
                          finish2 = 0;
                          finish3 = 0;
                          finish4 = 0;
                          finish5 = 0;
                          finish6 = 0;
                          finish7 = 0;
                          finish8 = 0;
                          finish9 = 0;
                          finish10 = 0;


                        }
                        else
                          {
                            showDialog(
                              context: context,
                              builder: (BuildContext context) {
                                // return object of type Dialog
                                return AlertDialog(
                                  title: new Text("提示"),
                                  content: new Text("重新输入病的症状......"),
                                  actions: <Widget>[
                                    // usually buttons at the bottom of the dialog
                                    new FlatButton(
                                      child: new Text("关闭"),
                                      onPressed: () {
                                        Navigator.of(context).pop();
                                      },
                                    ),
                                  ],
                                );
                              },
                            );



                          }
                      }
/*
                      showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          // return object of type Dialog
                          return AlertDialog(
                            title: new Text("提示"),
                            content: new Text("正在思考结果中...... 或者重新输入病的症状......"),
                            actions: <Widget>[
                              // usually buttons at the bottom of the dialog
                              new FlatButton(
                                child: new Text("关闭"),
                                onPressed: () {
                                  Navigator.of(context).pop();
                                },
                              ),
                            ],
                          );
                        },
                      );

                       */
                    }
                },

              )

            ],




          )),
    );
  }
}




class FirstRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AI医生的咨询结果'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('回回'),
          onPressed: () => {
          Navigator.pop(context,true)
          },
        ),
      ),
    );
  }
}




//void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AI医生的咨询结果'),
      ),
      body: Center(
        child:MyHomePage()
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {

  @override
  void initState()  {
    super.initState();

  }


  @override
  Widget build(BuildContext context) {





    return Scaffold(
      //appBar: AppBar(title: Text('Show More Demo')),
      body: ListView(
        padding: EdgeInsets.all(8),

        children: <Widget>[
          DataCard(
            title: '医生1回答:',
            child: ShowMoreText(
              doctor_result_1,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生2回答:',
            child: ShowMoreText(
              doctor_result_2,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生3回答:',
            child: ShowMoreText(
              doctor_result_3,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生4回答:',
            child: ShowMoreText(
              doctor_result_4,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生5回答:',
            child: ShowMoreText(
              doctor_result_5,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生6回答:',
            child: ShowMoreText(
              doctor_result_6,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生7回答:',
            child: ShowMoreText(
              doctor_result_7,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生8回答:',
            child: ShowMoreText(
              doctor_result_8,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生9回答:',
            child: ShowMoreText(
              doctor_result_9,
              shouldShowLessText: true,
            ),
          ),
          DataCard(
            title: '医生10回答:',
            child: ShowMoreText(
              doctor_result_10,
              shouldShowLessText: true,
            ),
          ),


        ],
      ),
    );
  }
}

class DataCard extends StatelessWidget {
  final String title;
  final Widget child;

  const DataCard({Key key, this.title, this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(8),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Container(
            color: Colors.greenAccent,
            height: 60,
            padding: EdgeInsets.all(16),
            child: Icon(Icons.school) //FlutterLogo(style: FlutterLogoStyle.horizontal),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(title, style: Theme.of(context).textTheme.subhead),
                SizedBox(height: 8),
                child,
              ],
            ),
          ),
        ],
      ),
    );
  }
}
