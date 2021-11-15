# 정규표현식

    / regex(pattern) / i (flag)

<br/>

### flag /global

매칭되는 다수의 결과값을 기억한다.

    /regex/g

---

## /pattern/ Group, range

    /Hi|Hello/gm            Hi 또는 Hello와 매칭
    /(Hi|Hello)|(and)/gm    Hi 또는 Hello의 그룹() , 또는 and의 그룹()
    /gr(e|a)y/gm            gr로 시작, e 또는 a가 포함되며 y로 끝나는 단어
    /gr(?:e|a)y/gm          ?: 찾지만 기억하지 않음
    /[a-fA-Z0-9]/gm         a~z까지, A-Z까지, 0-9까지
    /[^a-fA-Z0-9]/gm        a~z까지, A-Z까지, 0-9까지를 제외하고 찾는다

---

## /pattern/ Quantifiers

    /gra?y/gm               ? gra다음에 a가 [있는 경우, 없는 경우]
    /gra*y/gm               ? gra다음에 a가 [있거나, 없거나, 여러개거나]
