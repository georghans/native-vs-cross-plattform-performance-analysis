package com.example.native_android_java;

import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    ListView listView;
    TextView textView;
    ArrayList<itemModel> arrayList;
    int n = 100000;
    int j = 0;
    int[] primes = new int[n];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textView = findViewById(R.id.textView);
        //listView = findViewById(R.id.listView);

        final Button button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                j = 0;
                primes = new int[n];
                textView.setText("");
                long startTime = System.currentTimeMillis();
                for (int i = 0; i < n; i++) {
                    boolean foundPrime = false;
                    while (!foundPrime) {
                        j++;
                        if(isPrime(j)) {
                            primes[i] = j;
                            foundPrime = true;
                        }
                    }
                }
                long stopTime = System.currentTimeMillis();

                textView.append("calculated " + n + " primes in " + (stopTime - startTime) + " milliseconds\n\n" +  Arrays.toString(primes));
            }
        });

        // arrayList = new ArrayList<>();
        // new fetchData().execute();
    }

    static boolean isPrime(int n)
    {

        // Check if number is less than
        // equal to 1
        if (n <= 1)
            return false;

            // Check if number is 2
        else if (n == 2)
            return true;

            // Check if n is a multiple of 2
        else if (n % 2 == 0)
            return false;

        // If not, then just check the odds
        for (int i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0)
                return false;
        }
        return true;
    }

    public class fetchData extends AsyncTask<String, String, String> {

        @Override
        public void onPreExecute() {
            super .onPreExecute();
        }

        @Override
        protected String doInBackground(String... params) {
            arrayList.clear();
            String result = null;
            try {
                URL url = new URL("https://jsonplaceholder.typicode.com/albums");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.connect();

                if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                    InputStreamReader inputStreamReader = new InputStreamReader(conn.getInputStream());
                    BufferedReader reader = new BufferedReader(inputStreamReader);
                    StringBuilder stringBuilder = new StringBuilder();
                    String temp;

                    while ((temp = reader.readLine()) != null) {
                        stringBuilder.append(temp);
                    }
                    result = stringBuilder.toString();
                }else  {
                    result = "error";
                }

            } catch (Exception  e) {
                e.printStackTrace();
            }
            return result;
        }

        @Override
        public void onPostExecute(String s) {
            super .onPostExecute(s);
            try {
                String newS = "{\"data\":" + s + "}";

                JSONObject object = new JSONObject(newS);
                JSONArray array = object.getJSONArray("data");


                for (int i = 0; i < array.length(); i++) {
//
                    JSONObject jsonObject = array.getJSONObject(i);
                    String title = jsonObject.getString("title");
//                    String id = jsonObject.getString("id");
//                    String first_name = jsonObject.getString("first_name");
//                    String last_name = jsonObject.getString("last_name");
//                    String email = jsonObject.getString("email");

                    itemModel model = new itemModel();
//                    model.setId(id);
                    model.setTitle(title);
//                    model.setName(first_name + " " + last_name);
//                    model.setEmail(email);
                    arrayList.add(model);
                }
            } catch (JSONException  e) {
                e.printStackTrace();
            }

            CustomAdapter adapter = new CustomAdapter(MainActivity.this, arrayList);
            listView.setAdapter(adapter);

        }
    }
}