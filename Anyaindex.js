const _0x54fe92=_0x2967;function _0x2967(_0x5ad1db,_0xc8f7fa){const _0x3ac301=_0x3ac3();return _0x2967=function(_0x2967dd,_0x424c6b){_0x2967dd=_0x2967dd-0x16c;let _0x186ed4=_0x3ac301[_0x2967dd];return _0x186ed4;},_0x2967(_0x5ad1db,_0xc8f7fa);}(function(_0x185a80,_0x5e3f52){const _0x4db22b=_0x2967,_0x11450c=_0x185a80();while(!![]){try{const _0x5d0407=-parseInt(_0x4db22b(0x181))/0x1+parseInt(_0x4db22b(0x21e))/0x2*(-parseInt(_0x4db22b(0x225))/0x3)+-parseInt(_0x4db22b(0x238))/0x4*(parseInt(_0x4db22b(0x16d))/0x5)+-parseInt(_0x4db22b(0x227))/0x6+parseInt(_0x4db22b(0x231))/0x7+parseInt(_0x4db22b(0x195))/0x8+parseInt(_0x4db22b(0x1b1))/0x9;if(_0x5d0407===_0x5e3f52)break;else _0x11450c['push'](_0x11450c['shift']());}catch(_0x2b0ab5){_0x11450c['push'](_0x11450c['shift']());}}}(_0x3ac3,0xd9e30),require('./config'));const {default:AnyaPikaConnect,default:makeWASocket,BufferJSON,initInMemoryKeyStore,MessageType,AnyMessageContent,useSingleFileAuthState,delay,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x54fe92(0x1d0)),pino=require('pino'),fs=require('fs'),yargs=require(_0x54fe92(0x201)),chalk=require(_0x54fe92(0x178)),FileType=require(_0x54fe92(0x174)),path=require(_0x54fe92(0x22b)),_=require(_0x54fe92(0x245)),color=require(_0x54fe92(0x23c)),PhoneNumber=require(_0x54fe92(0x1d7)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x54fe92(0x1f2)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require('./lib/lib/myfunc'),moment=require(_0x54fe92(0x1ae)),act=JSON[_0x54fe92(0x191)](fs[_0x54fe92(0x183)]('./lib/database/_events.json'));var low;try{low=require(_0x54fe92(0x1e0));}catch(_0x5aec62){low=require('./lib/lib/lowdb');}const {Low,JSONFile}=low,mongoDB=require(_0x54fe92(0x224));global['opts']=new Object(yargs(process['argv'][_0x54fe92(0x1b3)](0x2))[_0x54fe92(0x217)](![])[_0x54fe92(0x191)]()),global['db']=new Low(/https?:\/\//[_0x54fe92(0x1d6)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x54fe92(0x1d6)](opts['db'])?new mongoDB(opts['db']):new JSONFile('lib/database/src/database.json')),global[_0x54fe92(0x235)]=global['db'],global[_0x54fe92(0x221)]=async function loadDatabase(){const _0x5853e5=_0x54fe92;if(global['db'][_0x5853e5(0x1a8)])return new Promise(_0x1e2b8b=>setInterval(function(){const _0x52e3ce=_0x5853e5;!global['db'][_0x52e3ce(0x1a8)]?(clearInterval(this),_0x1e2b8b(global['db'][_0x52e3ce(0x1e8)]==null?global[_0x52e3ce(0x221)]():global['db']['data'])):null;},0x1*0x3e8));if(global['db'][_0x5853e5(0x1e8)]!==null)return;global['db'][_0x5853e5(0x1a8)]=!![],global['db'][_0x5853e5(0x1a8)]=![],global['db'][_0x5853e5(0x1e8)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x5853e5(0x1e8)]||{}},global['db'][_0x5853e5(0x216)]=_[_0x5853e5(0x216)](global['db'][_0x5853e5(0x1e8)]);},loadDatabase(),process['on']('uncaughtException',console['error']);if(global['db'])setInterval(async()=>{const _0x400c3e=_0x54fe92;if(global['db'][_0x400c3e(0x1e8)])await global['db'][_0x400c3e(0x213)]();},0x1e*0x3e8);function nocache(_0x2ba8da,_0x57e1f5=()=>{}){const _0x18397e=_0x54fe92;console[_0x18397e(0x1f8)](_0x2ba8da+'\x20is\x20up\x20to\x20date!'),fs[_0x18397e(0x1ea)](require[_0x18397e(0x1bb)](_0x2ba8da),async()=>{const _0x174d12=_0x18397e;await uncache(require[_0x174d12(0x1bb)](_0x2ba8da)),_0x57e1f5(_0x2ba8da);});}function uncache(_0x1d7e72='.'){return new Promise((_0x311931,_0x4a7316)=>{const _0x4a60aa=_0x2967;try{delete require[_0x4a60aa(0x1c6)][require[_0x4a60aa(0x1bb)](_0x1d7e72)],_0x311931();}catch(_0x1095a7){_0x4a7316(_0x1095a7);}});}const store=makeInMemoryStore({'logger':pino()[_0x54fe92(0x1b2)]({'level':_0x54fe92(0x1ba),'stream':'store'})});async function startAnyaPika(){const _0x2d13ad=_0x54fe92,_0xedb429=async()=>{const _0x342a7e=_0x2967,{state:_0x5acf09,saveCreds:_0x414544}=await useMultiFileAuthState(_0x342a7e(0x237)),_0x2ce748=makeWASocket({'printQRInTerminal':!![],'logger':pino({'level':_0x342a7e(0x1ba)}),'auth':_0x5acf09,'browser':[botname+_0x342a7e(0x1d9),'Safari',_0x342a7e(0x220)],'fireInitQueries':![],'shouldSyncHistoryMessage':![],'downloadHistory':![],'syncFullHistory':![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x3d659f=>{const _0x1486f3=_0x342a7e;if(store){const _0x216615=await store['loadMessage'](_0x3d659f[_0x1486f3(0x1c7)],_0x3d659f['id'],undefined);return _0x216615[_0x1486f3(0x1b6)]||undefined;}return{'conversation':_0x1486f3(0x215)};}});return store[_0x342a7e(0x1e9)](_0x2ce748['ev']),_0x2ce748['ev']['on'](_0x342a7e(0x1d5),_0x4c62b7=>{const _0x1e2ee6=_0x342a7e,{connection:_0x110984,lastDisconnect:_0x3f571f}=_0x4c62b7;if(_0x110984==='open'){const _0x345439=JSON[_0x1e2ee6(0x191)](fs[_0x1e2ee6(0x183)](_0x1e2ee6(0x204))),_0x1fd2fb=JSON['parse'](fs[_0x1e2ee6(0x183)](_0x1e2ee6(0x1a5)));for(let _0x532185 of ownernumber){let _0x1b0a79='';_0x1b0a79+=_0x1e2ee6(0x16e);for(let _0x245e01 of _0x345439){if(_0x245e01[_0x1e2ee6(0x1c9)]=='true')_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x1bd)+prefa+_0x1e2ee6(0x205);else{if(_0x245e01[_0x1e2ee6(0x1f9)]==_0x1e2ee6(0x23a))_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x22e);else _0x245e01[_0x1e2ee6(0x19e)]==_0x1e2ee6(0x23a)&&(_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x21d));}}_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x194)+global['botname']+'\x0a',_0x1b0a79+='*'+themeemoji+'\x09'+'Owner\x20:*\x20'+ownername+'\x0a';for(let _0x49e18d of _0x1fd2fb){if(_0x49e18d[_0x1e2ee6(0x22f)]=='true')_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x1e6);else{if(_0x49e18d['public']=='true')_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x21b);else _0x49e18d[_0x1e2ee6(0x1e7)]=='true'&&(_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x1f6));}}_0x1b0a79+='*'+themeemoji+'\x09'+_0x1e2ee6(0x20b)+global[_0x1e2ee6(0x197)]+'\x20on\x20timezone\x20of\x20*'+global[_0x1e2ee6(0x1fd)]+_0x1e2ee6(0x243),_0x1b0a79+=_0x1e2ee6(0x1c3)+moment['tz'](timezone)[_0x1e2ee6(0x1dd)](_0x1e2ee6(0x1a6))+'*\x0a',_0x1b0a79+=_0x1e2ee6(0x1c3)+moment['tz'](timezone)[_0x1e2ee6(0x1dd)](_0x1e2ee6(0x1f1))+'*';;_0x2ce748['sendMessage'](_0x532185+_0x1e2ee6(0x1a0),{'image':global[_0x1e2ee6(0x17a)],'caption':_0x1b0a79,'headerType':0x4});}}_0x110984===_0x1e2ee6(0x17c)&&(_0x3f571f[_0x1e2ee6(0x1e4)]?.[_0x1e2ee6(0x17d)]?.['statusCode']!==DisconnectReason['loggedOut']?_0xedb429():console['log']('Connection\x20logged\x20out...'));}),_0x2ce748['ev']['on'](_0x342a7e(0x239),await _0x414544),act['anti_Call']==_0x342a7e(0x23a)&&_0x2ce748['ws']['on'](_0x342a7e(0x176),async _0x1a8551=>{const _0x2e144b=_0x342a7e,_0x2a211e=_0x1a8551[_0x2e144b(0x19c)][0x0][_0x2e144b(0x186)][_0x2e144b(0x1f5)];if(_0x1a8551[_0x2e144b(0x19c)][0x0][_0x2e144b(0x19d)]==_0x2e144b(0x234)){let _0x412445=await _0x2ce748[_0x2e144b(0x192)](_0x2a211e,global[_0x2e144b(0x1d1)]);_0x2ce748[_0x2e144b(0x177)](_0x2a211e,{'text':'*No\x20one\x20is\x20allowed\x20to\x20call\x20on\x20this\x20number!*,\x20Please\x20contact\x20owner\x20to\x20get\x20unblocked.'},{'quoted':_0x412445}),await sleep(0x1f40),await _0x2ce748['updateBlockStatus'](_0x2a211e,'block');}}),_0x2ce748['ev']['on'](_0x342a7e(0x211),async _0x26b5a4=>{const _0x13dc92=_0x342a7e,_0x17e86c=_0x26b5a4[_0x13dc92(0x223)][0x0];if(!_0x17e86c[_0x13dc92(0x1b6)])return;_0x17e86c[_0x13dc92(0x1b6)]=Object[_0x13dc92(0x1a4)](_0x17e86c[_0x13dc92(0x1b6)])[0x0]===_0x13dc92(0x203)?_0x17e86c[_0x13dc92(0x1b6)][_0x13dc92(0x203)][_0x13dc92(0x1b6)]:_0x17e86c['message'];if(_0x17e86c[_0x13dc92(0x1cf)]&&_0x17e86c[_0x13dc92(0x1cf)]['remoteJid']==='status@broadcast')return;if(_0x17e86c[_0x13dc92(0x1cf)]['id']['startsWith'](_0x13dc92(0x18a))&&_0x17e86c['key']['id']['length']===0x10)return;m=smsg(_0x2ce748,_0x17e86c,store),require(_0x13dc92(0x1a2))(_0x2ce748,m,_0x26b5a4,store);}),_0x2ce748['ev']['on'](_0x342a7e(0x19f),async _0x30c5ba=>{const _0x22498e=_0x342a7e;try{let _0x1e5d55=await _0x2ce748['groupMetadata'](_0x30c5ba['id']),_0x1e7905=_0x30c5ba[_0x22498e(0x230)];for(let _0x3fb700 of _0x1e7905){try{var _0x5b52a0=await _0x2ce748[_0x22498e(0x1ff)](_0x3fb700,_0x22498e(0x1fe));}catch{var _0x5b52a0=_0x22498e(0x1e1);}try{var _0xbf14b1=await zass['profilePictureUrl'](_0x30c5ba['id'],_0x22498e(0x1fe));}catch{var _0xbf14b1=_0x22498e(0x18c);}const _0x195b5c=_0x1e5d55[_0x22498e(0x230)][_0x22498e(0x19b)],_0x8de5a1=moment['tz'](timezone)[_0x22498e(0x1dd)](_0x22498e(0x1a6)),_0x45ade0=moment['tz'](timezone)['format']('DD/MM/YYYY'),_0x2937fb={'key':{'fromMe':![],'participant':_0x22498e(0x1ca),...m['chat']?{'remoteJid':_0x22498e(0x1cd)}:{}},'message':{'liveLocationMessage':{'caption':_0x22498e(0x1f3)+global['ownername'],'h':_0x1e5d55[_0x22498e(0x218)],'jpegThumbnail':await getBuffer(_0xbf14b1)}}};if(act['welcome']=='true'){if(_0x30c5ba[_0x22498e(0x1a9)]==_0x22498e(0x1fb)){let _0x3477fa='';_0x3477fa+=_0x22498e(0x241)+_0x3fb700[_0x22498e(0x1d8)]('@')[0x0]+_0x22498e(0x232),_0x3477fa+=_0x22498e(0x233)+_0x1e5d55[_0x22498e(0x218)]+'*\x0a',_0x3477fa+=_0x22498e(0x1ac)+_0x195b5c+'th*\x20member(s)\x20_('+_0x45ade0+')_',_0x3477fa+=_0x22498e(0x184)+global[_0x22498e(0x22c)]+_0x22498e(0x246),_0x3477fa+='Type\x20*'+prefa+_0x22498e(0x1ed),_0x3477fa+=_0x22498e(0x196)+prefa+_0x22498e(0x1cb),_0x2ce748[_0x22498e(0x177)](_0x30c5ba['id'],{'image':await getBuffer(_0x5b52a0),'caption':_0x3477fa,'headerType':0x4,'mentions':[_0x3fb700]},{'quoted':_0x2937fb});}}if(act[_0x22498e(0x198)]==_0x22498e(0x23a)){if(_0x30c5ba[_0x22498e(0x1a9)]==_0x22498e(0x1aa)){let _0x29791b='';_0x29791b+=_0x22498e(0x1da)+_0x3fb700['split']('@')[0x0]+'*\x20has\x20leaved\x20this\x20gc.\x0a\x0a',_0x29791b+=_0x22498e(0x1cc)+_0x195b5c+_0x22498e(0x1d3),_0x2ce748[_0x22498e(0x177)](_0x30c5ba['id'],{'image':await getBuffer(_0x5b52a0),'caption':_0x29791b,'headerType':0x4,'mentions':[_0x3fb700]},{'quoted':_0x2937fb});}}}act[_0x22498e(0x1a1)]==_0x22498e(0x23a)&&(_0x30c5ba[_0x22498e(0x1a9)]==_0x22498e(0x1b9)&&_0x2ce748['sendMessage'](_0x30c5ba['id'],{'image':await getBuffer(_0x5b52a0),'captain':_0x22498e(0x1e5)+num[_0x22498e(0x1d8)]('@')[0x0]+_0x22498e(0x18e),'headerType':0x4,'mentions':[num]})),act[_0x22498e(0x244)]==_0x22498e(0x23a)&&(_0x30c5ba[_0x22498e(0x1a9)]==_0x22498e(0x200)&&_0x2ce748['sendMessage'](_0x30c5ba['id'],{'image':await getBuffer(_0x5b52a0),'captain':_0x22498e(0x1db)+num['split']('@')[0x0]+'*\x20has\x20been\x20*demoted*\x20as\x20a\x20member\x20in\x20this\x20group.','headerType':0x4,'mentions':[num]})),_0x2ce748['ev']['on'](_0x22498e(0x1c8),async _0x47b084=>{const _0x5db53d=_0x22498e;if(_0x47b084[0x0][_0x5db53d(0x23f)]==!![]){let _0x53c218='';_0x53c218+=_0x5db53d(0x236),_0x53c218+=_0x5db53d(0x1de)+realDate+')_',_0x2ce748[_0x5db53d(0x177)](_0x47b084[0x0]['id'],{'image':await getBuffer(_0xbf14b1),'captain':_0x53c218,'headerType':0x4});}else{if(_0x47b084[0x0][_0x5db53d(0x23f)]==![]){let _0x42dd23='';_0x42dd23+=_0x5db53d(0x172),_0x42dd23+=_0x5db53d(0x19a)+realDate+')_',_0x2ce748[_0x5db53d(0x177)](_0x47b084[0x0]['id'],{'image':await getBuffer(_0xbf14b1),'captain':_0x42dd23,'headerType':0x4});}else{if(_0x47b084[0x0][_0x5db53d(0x210)]==!![]){let _0x1b7f85='';_0x1b7f85+=_0x5db53d(0x1b7),_0x1b7f85+=_0x5db53d(0x1bf)+realDate+')_',_0x2ce748[_0x5db53d(0x177)](_0x47b084[0x0]['id'],{'image':await getBuffer(_0xbf14b1),'captain':_0x1b7f85,'headerType':0x4});}else{if(_0x47b084[0x0][_0x5db53d(0x210)]==![]){let _0x375a66='';_0x375a66+=_0x5db53d(0x17f),_0x375a66+=_0x5db53d(0x175)+realDate+')_',_0x2ce748[_0x5db53d(0x177)](_0x47b084[0x0]['id'],{'image':await getBuffer(_0xbf14b1),'captain':_0x375a66,'headerType':0x4});}else{let _0x447e2d='';_0x447e2d+=_0x5db53d(0x20d),_0x447e2d+=_0x5db53d(0x226)+_0x47b084[0x0][_0x5db53d(0x218)]+_0x5db53d(0x202)+realDate+')_',_0x2ce748[_0x5db53d(0x177)](_0x47b084[0x0]['id'],{'image':await getBuffer(_0xbf14b1),'captain':_0x447e2d,'headerType':0x4});}}}}});}catch(_0x3974b5){console[_0x22498e(0x1f8)](_0x3974b5);}}),_0x2ce748['decodeJid']=_0x118dd5=>{const _0x1d2543=_0x342a7e;if(!_0x118dd5)return _0x118dd5;if(/:\d+@/gi['test'](_0x118dd5)){let _0x3c1303=jidDecode(_0x118dd5)||{};return _0x3c1303[_0x1d2543(0x187)]&&_0x3c1303[_0x1d2543(0x242)]&&_0x3c1303[_0x1d2543(0x187)]+'@'+_0x3c1303[_0x1d2543(0x242)]||_0x118dd5;}else return _0x118dd5;},_0x2ce748['ev']['on'](_0x342a7e(0x1af),_0x531a0c=>{const _0x25a551=_0x342a7e;for(let _0x723024 of _0x531a0c){let _0x1beab3=_0x2ce748[_0x25a551(0x20c)](_0x723024['id']);if(store&&store[_0x25a551(0x208)])store['contacts'][_0x1beab3]={'id':_0x1beab3,'name':_0x723024[_0x25a551(0x1b0)]};}}),_0x2ce748[_0x342a7e(0x17b)]=(_0xb258e0,_0x13ee0c=![])=>{const _0x549dd3=_0x342a7e;id=_0x2ce748[_0x549dd3(0x20c)](_0xb258e0),_0x13ee0c=_0x2ce748[_0x549dd3(0x173)]||_0x13ee0c;let _0x9410eb;if(id['endsWith']('@g.us'))return new Promise(async _0xfe52ad=>{const _0xa1cb1a=_0x549dd3;_0x9410eb=store['contacts'][id]||{};if(!(_0x9410eb[_0xa1cb1a(0x16f)]||_0x9410eb[_0xa1cb1a(0x218)]))_0x9410eb=_0x2ce748['groupMetadata'](id)||{};_0xfe52ad(_0x9410eb[_0xa1cb1a(0x16f)]||_0x9410eb[_0xa1cb1a(0x218)]||PhoneNumber('+'+id['replace'](_0xa1cb1a(0x1a0),''))[_0xa1cb1a(0x170)](_0xa1cb1a(0x1f0)));});else _0x9410eb=id===_0x549dd3(0x1ca)?{'id':id,'name':_0x549dd3(0x206)}:id===_0x2ce748[_0x549dd3(0x20c)](_0x2ce748[_0x549dd3(0x187)]['id'])?_0x2ce748[_0x549dd3(0x187)]:store[_0x549dd3(0x208)][id]||{};return(_0x13ee0c?'':_0x9410eb[_0x549dd3(0x16f)])||_0x9410eb[_0x549dd3(0x218)]||_0x9410eb[_0x549dd3(0x190)]||PhoneNumber('+'+_0xb258e0[_0x549dd3(0x1fa)](_0x549dd3(0x1a0),''))['getNumber'](_0x549dd3(0x1f0));},_0x2ce748[_0x342a7e(0x192)]=async(_0x50193d,_0x8f7c4d,_0x5837ae='',_0x1ce17b={})=>{const _0x2a81be=_0x342a7e;let _0x4f672d=[];for(let _0x165e82 of _0x8f7c4d){_0x4f672d['push']({'displayName':await _0x2ce748['getName'](_0x165e82),'vcard':_0x2a81be(0x1c4)+await _0x2ce748[_0x2a81be(0x17b)](_0x165e82)+_0x2a81be(0x207)+await _0x2ce748[_0x2a81be(0x17b)](_0x165e82)+'\x0aitem1.TEL;waid='+_0x165e82+':'+_0x165e82+_0x2a81be(0x188)+ytname+_0x2a81be(0x212)+socialm+_0x2a81be(0x1ef)+location+';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD'});}_0x2ce748[_0x2a81be(0x177)](_0x50193d,{'contacts':{'displayName':_0x4f672d[_0x2a81be(0x19b)]+_0x2a81be(0x1ec),'contacts':_0x4f672d},..._0x1ce17b},{'quoted':_0x5837ae});},_0x2ce748[_0x342a7e(0x182)]=_0x4c4002=>{const _0x4ce02a=_0x342a7e;return _0x2ce748[_0x4ce02a(0x185)]({'tag':'iq','attrs':{'to':_0x4ce02a(0x1a0),'type':_0x4ce02a(0x1ce),'xmlns':_0x4ce02a(0x1ad)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x4ce02a(0x18b)](_0x4c4002,_0x4ce02a(0x1c2))}]}),_0x4c4002;},_0x2ce748[_0x342a7e(0x228)]=async(_0x2eaefb,_0x4db413,_0x49dbd8,_0x11bd16={})=>{const _0x43cb5c=_0x342a7e;let _0x5566f7=Buffer[_0x43cb5c(0x1b4)](_0x4db413)?_0x4db413:/^data:.*?\/.*?;base64,/i[_0x43cb5c(0x1d6)](_0x4db413)?Buffer[_0x43cb5c(0x18b)](_0x4db413['split']`,`[0x1],'base64'):/^https?:\/\//[_0x43cb5c(0x1d6)](_0x4db413)?await await getBuffer(_0x4db413):fs['existsSync'](_0x4db413)?fs[_0x43cb5c(0x183)](_0x4db413):Buffer[_0x43cb5c(0x1ee)](0x0),_0x2d53e7;return _0x11bd16&&(_0x11bd16[_0x43cb5c(0x1dc)]||_0x11bd16[_0x43cb5c(0x1e3)])?_0x2d53e7=await writeExifImg(_0x5566f7,_0x11bd16):_0x2d53e7=await imageToWebp(_0x5566f7),await _0x2ce748[_0x43cb5c(0x177)](_0x2eaefb,{'sticker':{'url':_0x2d53e7},..._0x11bd16},{'quoted':_0x49dbd8}),_0x2d53e7;},_0x2ce748[_0x342a7e(0x20e)]=async(_0x12fd9e,_0x3b4deb,_0x56acf4,_0x2a5d4d={})=>{const _0x2f584d=_0x342a7e;let _0x303844=Buffer[_0x2f584d(0x1b4)](_0x3b4deb)?_0x3b4deb:/^data:.*?\/.*?;base64,/i[_0x2f584d(0x1d6)](_0x3b4deb)?Buffer[_0x2f584d(0x18b)](_0x3b4deb[_0x2f584d(0x1d8)]`,`[0x1],'base64'):/^https?:\/\//[_0x2f584d(0x1d6)](_0x3b4deb)?await await getBuffer(_0x3b4deb):fs['existsSync'](_0x3b4deb)?fs['readFileSync'](_0x3b4deb):Buffer['alloc'](0x0),_0x32615c;return _0x2a5d4d&&(_0x2a5d4d[_0x2f584d(0x1dc)]||_0x2a5d4d[_0x2f584d(0x1e3)])?_0x32615c=await writeExifVid(_0x303844,_0x2a5d4d):_0x32615c=await videoToWebp(_0x303844),await _0x2ce748[_0x2f584d(0x177)](_0x12fd9e,{'sticker':{'url':_0x32615c},..._0x2a5d4d},{'quoted':_0x56acf4}),_0x32615c;},_0x2ce748[_0x342a7e(0x199)]=async(_0x23fe29,_0x2d35d3,_0xe19523=!![])=>{const _0x1c6bc0=_0x342a7e;let _0x3b846d=_0x23fe29[_0x1c6bc0(0x21f)]?_0x23fe29[_0x1c6bc0(0x21f)]:_0x23fe29,_0x26226c=(_0x23fe29[_0x1c6bc0(0x21f)]||_0x23fe29)[_0x1c6bc0(0x1c5)]||'',_0x1b9424=_0x23fe29['mtype']?_0x23fe29[_0x1c6bc0(0x22d)][_0x1c6bc0(0x1fa)](/Message/gi,''):_0x26226c[_0x1c6bc0(0x1d8)]('/')[0x0];const _0x3000b2=await downloadContentFromMessage(_0x3b846d,_0x1b9424);let _0x46cbb5=Buffer['from']([]);for await(const _0x114c00 of _0x3000b2){_0x46cbb5=Buffer['concat']([_0x46cbb5,_0x114c00]);}let _0x16b757=await FileType['fromBuffer'](_0x46cbb5);return trueFileName=_0xe19523?_0x2d35d3+'.'+_0x16b757[_0x1c6bc0(0x22a)]:_0x2d35d3,await fs['writeFileSync'](trueFileName,_0x46cbb5),trueFileName;},_0x2ce748[_0x342a7e(0x17e)]=async _0x139ed6=>{const _0x1b20d5=_0x342a7e;let _0xa691c4=(_0x139ed6[_0x1b20d5(0x21f)]||_0x139ed6)[_0x1b20d5(0x1c5)]||'',_0x2cd30e=_0x139ed6[_0x1b20d5(0x22d)]?_0x139ed6[_0x1b20d5(0x22d)]['replace'](/Message/gi,''):_0xa691c4[_0x1b20d5(0x1d8)]('/')[0x0];const _0x157055=await downloadContentFromMessage(_0x139ed6,_0x2cd30e);let _0x3c2ebf=Buffer[_0x1b20d5(0x18b)]([]);for await(const _0x4821f9 of _0x157055){_0x3c2ebf=Buffer['concat']([_0x3c2ebf,_0x4821f9]);}return _0x3c2ebf;},_0x2ce748[_0x342a7e(0x1d4)]=async(_0x5716c8,_0x589b25,_0xd12578='',_0x76632='',_0x3a72b0='',_0x22e741={})=>{const _0x155a33=_0x342a7e;let _0xc43e4d=await _0x2ce748[_0x155a33(0x23d)](_0x589b25,!![]),{mime:_0x774f1f,ext:_0x1b94aa,res:_0x1d05a8,data:_0x210980,filename:_0x3574c7}=_0xc43e4d;if(_0x1d05a8&&_0x1d05a8[_0x155a33(0x1ad)]!==0xc8||file[_0x155a33(0x19b)]<=0x10000)try{throw{'json':JSON[_0x155a33(0x191)](file[_0x155a33(0x1f4)]())};}catch(_0x5324af){if(_0x5324af['json'])throw _0x5324af['json'];}let _0x289a7='',_0x49bf45=_0x774f1f,_0xa7d867=_0x3574c7;if(_0x22e741[_0x155a33(0x1eb)])_0x289a7=_0x155a33(0x20a);if(_0x22e741['asSticker']||/webp/[_0x155a33(0x1d6)](_0x774f1f)){let {writeExif:_0x3d00a8}=require(_0x155a33(0x1a7)),_0x11bc1f={'mimetype':_0x774f1f,'data':_0x210980};_0xa7d867=await _0x3d00a8(_0x11bc1f,{'packname':_0x22e741[_0x155a33(0x1dc)]?_0x22e741[_0x155a33(0x1dc)]:global['packname'],'author':_0x22e741[_0x155a33(0x1e3)]?_0x22e741[_0x155a33(0x1e3)]:global[_0x155a33(0x1e3)],'categories':_0x22e741[_0x155a33(0x1fc)]?_0x22e741[_0x155a33(0x1fc)]:[]}),await fs['promises'][_0x155a33(0x21a)](_0x3574c7),_0x289a7='sticker',_0x49bf45=_0x155a33(0x222);}else{if(/image/['test'](_0x774f1f))_0x289a7=_0x155a33(0x1fe);else{if(/video/['test'](_0x774f1f))_0x289a7=_0x155a33(0x1b8);else{if(/audio/['test'](_0x774f1f))_0x289a7=_0x155a33(0x209);else _0x289a7=_0x155a33(0x20a);}}}return await _0x2ce748['sendMessage'](_0x5716c8,{[_0x289a7]:{'url':_0xa7d867},'caption':_0x76632,'mimetype':_0x49bf45,'fileName':_0xd12578,..._0x22e741},{'quoted':_0x3a72b0,..._0x22e741}),fs[_0x155a33(0x18d)]['unlink'](_0xa7d867);},_0x2ce748[_0x342a7e(0x1bc)]=async(_0x3b9087,_0x244748,_0x3cf248=![],_0x389f4d={})=>{const _0x34643a=_0x342a7e;let _0x2c4f99;_0x389f4d[_0x34643a(0x1b5)]&&(_0x244748[_0x34643a(0x1b6)]=_0x244748[_0x34643a(0x1b6)]&&_0x244748[_0x34643a(0x1b6)]['ephemeralMessage']&&_0x244748[_0x34643a(0x1b6)][_0x34643a(0x203)][_0x34643a(0x1b6)]?_0x244748[_0x34643a(0x1b6)][_0x34643a(0x203)][_0x34643a(0x1b6)]:_0x244748[_0x34643a(0x1b6)]||undefined,_0x2c4f99=Object[_0x34643a(0x1a4)](_0x244748[_0x34643a(0x1b6)][_0x34643a(0x20f)][_0x34643a(0x1b6)])[0x0],delete(_0x244748[_0x34643a(0x1b6)]&&_0x244748[_0x34643a(0x1b6)][_0x34643a(0x171)]?_0x244748[_0x34643a(0x1b6)][_0x34643a(0x171)]:_0x244748[_0x34643a(0x1b6)]||undefined),delete _0x244748[_0x34643a(0x1b6)][_0x34643a(0x20f)]['message'][_0x2c4f99][_0x34643a(0x1ab)],_0x244748['message']={..._0x244748[_0x34643a(0x1b6)][_0x34643a(0x20f)][_0x34643a(0x1b6)]});let _0x45ec45=Object[_0x34643a(0x1a4)](_0x244748[_0x34643a(0x1b6)])[0x0],_0xd98638=await generateForwardMessageContent(_0x244748,_0x3cf248),_0x4bd6fd=Object[_0x34643a(0x1a4)](_0xd98638)[0x0],_0x4929b9={};if(_0x45ec45!=_0x34643a(0x1d2))_0x4929b9=_0x244748[_0x34643a(0x1b6)][_0x45ec45]['contextInfo'];_0xd98638[_0x4bd6fd]['contextInfo']={..._0x4929b9,..._0xd98638[_0x4bd6fd][_0x34643a(0x180)]};const _0x2d1e0c=await generateWAMessageFromContent(_0x3b9087,_0xd98638,_0x389f4d?{..._0xd98638[_0x4bd6fd],..._0x389f4d,..._0x389f4d[_0x34643a(0x180)]?{'contextInfo':{..._0xd98638[_0x4bd6fd]['contextInfo'],..._0x389f4d[_0x34643a(0x180)]}}:{}}:{});return await _0x2ce748[_0x34643a(0x229)](_0x3b9087,_0x2d1e0c['message'],{'messageId':_0x2d1e0c[_0x34643a(0x1cf)]['id']}),_0x2d1e0c;},_0x2ce748['cMod']=(_0x1bbcab,_0x1091ec,_0x233ba2='',_0x7fb70=_0x2ce748[_0x342a7e(0x187)]['id'],_0x3040ab={})=>{const _0x5c00ae=_0x342a7e;let _0xb2347b=Object[_0x5c00ae(0x1a4)](_0x1091ec[_0x5c00ae(0x1b6)])[0x0],_0x2d343e=_0xb2347b==='ephemeralMessage';_0x2d343e&&(_0xb2347b=Object[_0x5c00ae(0x1a4)](_0x1091ec[_0x5c00ae(0x1b6)]['ephemeralMessage'][_0x5c00ae(0x1b6)])[0x0]);let _0x32d31f=_0x2d343e?_0x1091ec[_0x5c00ae(0x1b6)][_0x5c00ae(0x203)]['message']:_0x1091ec[_0x5c00ae(0x1b6)],_0x25b708=_0x32d31f[_0xb2347b];if(typeof _0x25b708===_0x5c00ae(0x179))_0x32d31f[_0xb2347b]=_0x233ba2||_0x25b708;else{if(_0x25b708[_0x5c00ae(0x21c)])_0x25b708[_0x5c00ae(0x21c)]=_0x233ba2||_0x25b708[_0x5c00ae(0x21c)];else{if(_0x25b708[_0x5c00ae(0x1c1)])_0x25b708[_0x5c00ae(0x1c1)]=_0x233ba2||_0x25b708[_0x5c00ae(0x1c1)];}}if(typeof _0x25b708!==_0x5c00ae(0x179))_0x32d31f[_0xb2347b]={..._0x25b708,..._0x3040ab};if(_0x1091ec[_0x5c00ae(0x1cf)][_0x5c00ae(0x214)])_0x7fb70=_0x1091ec[_0x5c00ae(0x1cf)][_0x5c00ae(0x214)]=_0x7fb70||_0x1091ec['key'][_0x5c00ae(0x214)];else{if(_0x1091ec[_0x5c00ae(0x1cf)]['participant'])_0x7fb70=_0x1091ec[_0x5c00ae(0x1cf)]['participant']=_0x7fb70||_0x1091ec['key']['participant'];}if(_0x1091ec['key'][_0x5c00ae(0x1c7)][_0x5c00ae(0x1be)](_0x5c00ae(0x1a0)))_0x7fb70=_0x7fb70||_0x1091ec[_0x5c00ae(0x1cf)][_0x5c00ae(0x1c7)];else{if(_0x1091ec[_0x5c00ae(0x1cf)]['remoteJid'][_0x5c00ae(0x1be)](_0x5c00ae(0x240)))_0x7fb70=_0x7fb70||_0x1091ec[_0x5c00ae(0x1cf)][_0x5c00ae(0x1c7)];}return _0x1091ec[_0x5c00ae(0x1cf)][_0x5c00ae(0x1c7)]=_0x1bbcab,_0x1091ec['key'][_0x5c00ae(0x189)]=_0x7fb70===_0x2ce748[_0x5c00ae(0x187)]['id'],proto[_0x5c00ae(0x23e)][_0x5c00ae(0x219)](_0x1091ec);},_0x2ce748['getFile']=async(_0x3d7c22,_0x5b3c33)=>{const _0x588b96=_0x342a7e;let _0xc7b684,_0x5ce247=Buffer['isBuffer'](_0x3d7c22)?_0x3d7c22:/^data:.*?\/.*?;base64,/i[_0x588b96(0x1d6)](_0x3d7c22)?Buffer[_0x588b96(0x18b)](_0x3d7c22[_0x588b96(0x1d8)]`,`[0x1],_0x588b96(0x1df)):/^https?:\/\//[_0x588b96(0x1d6)](_0x3d7c22)?await(_0xc7b684=await getBuffer(_0x3d7c22)):fs['existsSync'](_0x3d7c22)?(filename=_0x3d7c22,fs[_0x588b96(0x183)](_0x3d7c22)):typeof _0x3d7c22===_0x588b96(0x179)?_0x3d7c22:Buffer[_0x588b96(0x1ee)](0x0),_0x5714b8=await FileType['fromBuffer'](_0x5ce247)||{'mime':_0x588b96(0x1a3),'ext':_0x588b96(0x18f)};filename=path[_0x588b96(0x16c)](__filename,'./src/'+new Date()*0x1+'.'+_0x5714b8[_0x588b96(0x22a)]);if(_0x5ce247&&_0x5b3c33)fs[_0x588b96(0x18d)][_0x588b96(0x1f7)](filename,_0x5ce247);return{'res':_0xc7b684,'filename':filename,'size':await getSizeMedia(_0x5ce247),..._0x5714b8,'data':_0x5ce247};},_0x2ce748;};_0xedb429()[_0x2d13ad(0x1e2)](_0x20e4c9=>console[_0x2d13ad(0x1f8)](_0x20e4c9));}function _0x3ac3(){const _0x57d81f=['*👋🏻\x20•*\x20The\x20Ex-member,\x20*','*👤\x20•\x20','packname','format','Group\x20has\x20been\x20*closed*\x20by\x20this\x20group\x27s\x20Admin!\x20_(','base64','lowdb','https://i.ibb.co/sbqvDMw/avatar-contact-large-v2.png','catch','author','error','*👑\x20•\x20','WorkType\x20:*\x20_Self\x20usage_\x0a','only_admin','data','bind','watchFile','asDocument','\x20Kontak','menu*\x20for\x20my\x20commands.\x0a','alloc','\x0aitem3.X-ABLabel:GitHub\x0aitem4.ADR:;;','international','DD/MM/YYYY','./lib/lib/exif','Bot\x20by\x20:\x20','toString','call-creator','WorkType\x20:*\x20_Admins\x20usage_\x0a','writeFile','log','multi_prefix','replace','add','categories','timezone','image','profilePictureUrl','demote','yargs/yargs','.*\x20_(','ephemeralMessage','./lib/database/_prefix.json','\x20\x22\x0a','WhatsApp','\x0aFN:','contacts','audio','document','TimeZone\x20:*\x20_Running\x20at\x20','decodeJid','*⚜️\x20•\x20Name\x20Changed\x20•\x20⚜️*\x0a\x0a','sendVideoAsSticker','viewOnceMessage','restrict','messages.upsert','\x0aitem2.X-ABLabel:YouTube\x0aitem3.URL:','write','participant','An\x20Error\x20Occurred,\x20Repeat\x20Command!','chain','exitProcess','subject','fromObject','unlink','WorkType\x20:*\x20_Public\x20usage_\x0a','caption','Prefix\x20:*\x20_All_\x0a','10UcwswH','msg','3.0','loadDatabase','image/webp','messages','./lib/lib/mongoDB','439734SttAgd','This\x20group\x27s\x20name\x20has\x20been\x20changed\x20to\x20*','8359542enwFBY','sendImageAsSticker','relayMessage','ext','path','botname','mtype','Prefix\x20:*\x20_Multi_\x0a','self','participants','12005630VNMAaC','\x20🎐🦋*\x0a\x0a','*🌈\x20•\x20','offer','DATABASE','*⛔\x20•\x20Group\x20Closed\x20•\x20⛔*\x0a\x0a','Anya-Session','500gPkHrT','creds.update','true','Update\x20','./lib/lib/color','getFile','WebMessageInfo','announce','@broadcast','*>>>\x20Hi,\x20@','server','*_\x0a\x0a','demote_msg','lodash','.*\x0a\x0a','join','37405YfEegz','*Queen\x20Anya\x20is\x20now\x20successfully\x20integrated\x20as\x20:*\x0a\x0a','name','getNumber','ignore','*✅\x20•\x20Group\x20Opened\x20•\x20✅*\x0a\x0a','withoutContact','file-type','Group\x20has\x20been\x20*unrestricted\x20to\x20edit\x20group\x27s\x20info*\x20for\x20group\x20members!\x20_(','CB:call','sendMessage','chalk','string','thumnnaiIs','getName','close','output','downloadMediaMessage','*☑️\x20•\x20Group\x20Unrestricted\x20•\x20☑️*\x0a\x0a','contextInfo','242022UDcNph','setStatus','readFileSync','*⛔\x20•*\x20I\x27m\x20your\x20bot\x20*','query','attrs','user','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aitem2.EMAIL;type=INTERNET:','fromMe','BAE5','from','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png','promises','*\x20has\x20been\x20*promoted*\x20as\x20an\x20Admin\x20in\x20this\x20group.','.bin','verifiedName','parse','sendContact','redBright','Name\x20:*\x20','7233736TyfkXx','Type\x20*','continent','goodbye','downloadAndSaveMediaMessage','Group\x20has\x20been\x20*opened*\x20by\x20this\x20group\x27s\x20Admin!\x20_(','length','content','tag','all_prefix','group-participants.update','@s.whatsapp.net','promote_msg','./AnyaCore','application/octet-stream','keys','./lib/database/_mode.json','HH:mm:ss','./lib/exif','READ','action','remove','viewOnce','*⛩️\x20•\x20','status','moment-timezone','contacts.update','notify','14188059whdKkP','child','slice','isBuffer','readViewOnce','message','*🚫\x20•\x20Group\x20Restricted\x20•\x20🚫*\x0a\x0a','video','promote','fatal','resolve','copyNForward','Prefix\x20:*\x20\x22\x20','includes','Group\x20has\x20been\x20*restricted\x20to\x20edit\x20group\x27s\x20info*\x20for\x20group\x20members\x20by\x20this\x20group\x27s\x20Admin!\x20_(','unwatchFile','text','utf-8','*•\x20','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','mimetype','cache','remoteJid','groups.update','single_prefix','0@s.whatsapp.net','desc*\x20for\x20this\x20group\x27s\x20desc.','_Now\x20less\x20than\x20*','status@broadcast','set','key','@queenanya/baileys','ownernumber','conversation','*\x20member(s)\x20left\x20in\x20this\x20group._','sendMedia','connection.update','test','awesome-phonenumber','split','\x20connected\x20🎐✅'];_0x3ac3=function(){return _0x57d81f;};return _0x3ac3();}startAnyaPika();let file=require[_0x54fe92(0x1bb)](__filename);fs[_0x54fe92(0x1ea)](file,()=>{const _0x263b64=_0x54fe92;fs[_0x263b64(0x1c0)](file),console['log'](chalk[_0x263b64(0x193)](_0x263b64(0x23b)+__filename)),delete require['cache'][file],require(file);});