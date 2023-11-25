*English translation has been left out of date for a long time. 
[Please contribute!](../translations/en/docs/std.md)*

## 標準定数・標準関数について
Aiscriptで最初から定義されていてどこでも使える定数・関数を指します。  
standardを省略してstd定数/関数とも呼ばれています。
## 書式
> #Core:v

`Core:v`という標準定数を表します。
> @Core:type(_v_: value): str

`Core:type`という標準関数を表します。  
`v`という名のvalue型（つまり任意の型）の引数を一つとり、str型（文字列型）の値を返します。

# 一覧

## std
### @print(_message_: str): void
画面に文字列を表示します。  

### @readline(_message_: str): str
文字列の入力を受け付けます。  

## :: Core

### #Core:v
型: `str`  
AiScriptのバージョンです。  

### @Core:type(_v_: value): str
値の型名を取得します。  

### @Core:to_str(_v_: value): str
値を表す文字列を取得します。  

## :: Util

### @Util:uuid(): str
新しいUUIDを生成します。  

## :: Json

### @Json:stringify(_v_: value): str
JSONを生成します。  

### @Json:parse(_json_: str): value
JSONをパースします。  
引数がJSONとしてパース可能でない場合はエラーになります。

## :: Date

### @Date:now(): num
現在時刻を取得します。  

### @Date:year(): num
現在時刻の年を取得します。  

### @Date:month(): num
現在時刻の月を取得します。  

### @Date:day(): num
現在時刻の日を取得します。  

### @Date:hour(): num
現在時刻の時を取得します。  

### @Date:minute(): num
現在時刻の分を取得します。  

### @Date:second(): num
現在時刻の秒を取得します。  

### @Date:parse(_date_: str): num

## :: Math
数が多いため専用のページになっています。→[std-math.md](std-math.md)

## :: Num
### @Num:to_hex(_x_: num): str
数値から16進数の文字列を生成します。  

### @Num:from_hex(_hex_: str): num
16進数の文字列から数値を生成します。  

## :: Str
### #Str:lf
型: `str`  
改行コード(LF)です。  

### #Str:lt(a: str, b: str): num
a < b ならば -1、a == b ならば 0、a > b ならば 1 を返します。  
arr.sortの比較関数として使用できます。

### #Str:gt(a: str, b: str): num
a > b ならば -1、a == b ならば 0、a < b ならば 1 を返します。  
arr.sortの比較関数として使用できます。

## :: Obj
### @Obj:keys(_v_: obj): arr

### @Obj:kvs(_v_: obj): arr

### @Obj:get(_v_: obj, _key_: str): value

### @Obj:set(_v_: obj, _key_: str, _val_: value): null

### @Obj:has(_v_: obj, _key_: str): bool

### @Obj:copy(_v_: obj): obj
オブジェクトのコピーを生成します。  

## :: Async
### @Async:interval(_interval_: num, _callback_: fn, _immediate_?: bool): fn
指定した周期でコールバック関数を呼び出します。  
戻り値として停止関数を返します。  

### @Async:timeout(_delay_: num, _callback_: fn):
指定した時間経過後にコールバック関数を呼び出します。  
戻り値として停止関数を返します。  
