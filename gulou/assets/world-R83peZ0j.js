import{a0 as Hr,a1 as yt,S as Ft,E as Ge,a2 as ja,M as Rt,V as pe,a3 as Gr,x as ht,a4 as oi,a5 as Pi,a6 as an,a7 as nt,a8 as Xt,H as Fn,a9 as Qt,g as St,u as xt,aa as rn,L as _t,ab as Br,ac as bn,ad as on,l as at,ae as Ka,W as gn,y as jt,af as Si,ag as kr,e as lt,ah as Vr,ai as Vn,aj as Pt,ak as Pn,al as xi,am as vn,an as En,ao as qa,ap as zr,t as Jt,aq as qt,ar as On,j as Hn,v as It,b as Dt,N as en,as as Dn,at as Wr,au as Xr,av as un,aw as jr,ax as Kr,ay as qr,az as Yr,aA as Qr,aB as Jr,aC as Zr,aD as $r,aE as eo,aF as to,aG as no,aH as io,aI as ao,aJ as ro,aK as oo,aL as Ya,aM as Qa,R as Un,aN as wn,aO as hn,aP as Ja,r as Yt,aQ as so,aR as co,aS as lo,aT as fo,aU as Za,aV as uo,aW as po,aX as ho,aY as mo,aZ as ze,h as go,i as _o,a_ as bo,a$ as $a,b0 as Lt,b1 as yn,b2 as er,b3 as tr,b4 as nr,O as Ot,b5 as vo,b6 as Eo,b7 as So,b8 as xo,b9 as ir,F as Kt,ba as To,bb as Mo,K as Ao,bc as ar,bd as Ro,be as rr,bf as or,bg as zn,bh as Wn,bi as Xn,bj as jn,bk as Ye,bl as Di,bm as Ui,bn as yi,bo as Ii,bp as Ni,bq as Fi,br as Oi,bs as Hi,bt as Gi,bu as Bi,bv as ki,bw as Vi,bx as zi,by as Wi,bz as Xi,bA as ji,bB as Ki,bC as qi,bD as Yi,bE as Qi,bF as Ji,bG as Zi,bH as $i,bI as ea,bJ as ta,bK as na,bL as ia,bM as aa,bN as si,bO as ci,bP as li,bQ as fi,bR as di,bS as ui,bT as pi,bU as wo,bV as ra,bW as Co,bX as Cn,bY as Lo,bZ as oa,b_ as sa,z as ca,$ as hi,b$ as mi,c0 as Po,c1 as sr,c2 as Do,c3 as Uo,c4 as yo,c5 as cr,c6 as la,c7 as In,c8 as fa,c9 as lr,ca as Io,cb as No,cc as Fo,cd as da,ce as pt,cf as Oo,Z as Ho,cg as Go,ch as Bo,ci as ko,Y as Vo,cj as zo,ck as Wo,cl as Xo,cm as jo,cn as Ko,co as gi,cp as qo,cq as Yo,cr as Qo,cs as Jo,ct as Zo,cu as $o,cv as es,cw as _i,cx as fr,cy as ts,cz as _n,cA as dr,cB as wt,cC as ns,P as is,c as as,cD as sn,Q as Nn,cE as rs,X as ln,T as os,cF as ss,cG as cs,cH as ls,cI as Kn,cJ as fs,f as ct,cK as ds,cL as us,w as ps,cM as hs,cN as ms,cO as gs,G as Nt,d as _s,cP as bs,p as vs,n as Es,cQ as Ss,cR as ur,cS as xs,cT as ua,cU as pa,o as ha,cV as Ts,B as pr,cW as Ms,k as hr,cX as mr,cY as gr,cZ as _r,c_ as br,c$ as vr,d0 as Er,d1 as As,d2 as Rs,C as Sr,m as ws,d3 as qn}from"./index-cr8B3VYP.js";function xr(){let e=null,n=!1,t=null,i=null;function r(a,o){t(a,o),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Cs(e){const n=new WeakMap;function t(s,l){const f=s.array,d=s.usage,u=f.byteLength,g=e.createBuffer();e.bindBuffer(l,g),e.bufferData(l,f,d),s.onUploadCallback();let b;if(f instanceof Float32Array)b=e.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)b=e.HALF_FLOAT;else if(f instanceof Uint16Array)s.isFloat16BufferAttribute?b=e.HALF_FLOAT:b=e.UNSIGNED_SHORT;else if(f instanceof Int16Array)b=e.SHORT;else if(f instanceof Uint32Array)b=e.UNSIGNED_INT;else if(f instanceof Int32Array)b=e.INT;else if(f instanceof Int8Array)b=e.BYTE;else if(f instanceof Uint8Array)b=e.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)b=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:b,bytesPerElement:f.BYTES_PER_ELEMENT,version:s.version,size:u}}function i(s,l,f){const d=l.array,u=l.updateRanges;if(e.bindBuffer(f,s),u.length===0)e.bufferSubData(f,0,d);else{u.sort((b,M)=>b.start-M.start);let g=0;for(let b=1;b<u.length;b++){const M=u[g],A=u[b];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,u[g]=A)}u.length=g+1;for(let b=0,M=u.length;b<M;b++){const A=u[b];e.bufferSubData(f,A.start*d.BYTES_PER_ELEMENT,d,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=n.get(s);l&&(e.deleteBuffer(l.buffer),n.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=n.get(s);(!d||d.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const f=n.get(s);if(f===void 0)n.set(s,t(s,l));else if(f.version<s.version){if(f.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,s,l),f.version=s.version}}return{get:r,remove:a,update:o}}var Ls=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ps=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ds=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Us=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ys=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Is=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ns=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Os=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ks=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vs=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zs=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ws=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,js=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ks=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qs=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ys=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Js=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zs=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$s=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ec=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ic=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rc="gl_FragColor = linearToOutputTexel( gl_FragColor );",oc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_c=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ec=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ac=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ic=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$c=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,el=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,il=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,al=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ol=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ll=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ul=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ml=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_l=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,El=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Al=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ll=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ul=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Il=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ol=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ql=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$l=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Ls,alphahash_pars_fragment:Ps,alphamap_fragment:Ds,alphamap_pars_fragment:Us,alphatest_fragment:ys,alphatest_pars_fragment:Is,aomap_fragment:Ns,aomap_pars_fragment:Fs,batching_pars_vertex:Os,batching_vertex:Hs,begin_vertex:Gs,beginnormal_vertex:Bs,bsdfs:ks,iridescence_fragment:Vs,bumpmap_pars_fragment:zs,clipping_planes_fragment:Ws,clipping_planes_pars_fragment:Xs,clipping_planes_pars_vertex:js,clipping_planes_vertex:Ks,color_fragment:qs,color_pars_fragment:Ys,color_pars_vertex:Qs,color_vertex:Js,common:Zs,cube_uv_reflection_fragment:$s,defaultnormal_vertex:ec,displacementmap_pars_vertex:tc,displacementmap_vertex:nc,emissivemap_fragment:ic,emissivemap_pars_fragment:ac,colorspace_fragment:rc,colorspace_pars_fragment:oc,envmap_fragment:sc,envmap_common_pars_fragment:cc,envmap_pars_fragment:lc,envmap_pars_vertex:fc,envmap_physical_pars_fragment:Sc,envmap_vertex:dc,fog_vertex:uc,fog_pars_vertex:pc,fog_fragment:hc,fog_pars_fragment:mc,gradientmap_pars_fragment:gc,lightmap_pars_fragment:_c,lights_lambert_fragment:bc,lights_lambert_pars_fragment:vc,lights_pars_begin:Ec,lights_toon_fragment:xc,lights_toon_pars_fragment:Tc,lights_phong_fragment:Mc,lights_phong_pars_fragment:Ac,lights_physical_fragment:Rc,lights_physical_pars_fragment:wc,lights_fragment_begin:Cc,lights_fragment_maps:Lc,lights_fragment_end:Pc,logdepthbuf_fragment:Dc,logdepthbuf_pars_fragment:Uc,logdepthbuf_pars_vertex:yc,logdepthbuf_vertex:Ic,map_fragment:Nc,map_pars_fragment:Fc,map_particle_fragment:Oc,map_particle_pars_fragment:Hc,metalnessmap_fragment:Gc,metalnessmap_pars_fragment:Bc,morphinstance_vertex:kc,morphcolor_vertex:Vc,morphnormal_vertex:zc,morphtarget_pars_vertex:Wc,morphtarget_vertex:Xc,normal_fragment_begin:jc,normal_fragment_maps:Kc,normal_pars_fragment:qc,normal_pars_vertex:Yc,normal_vertex:Qc,normalmap_pars_fragment:Jc,clearcoat_normal_fragment_begin:Zc,clearcoat_normal_fragment_maps:$c,clearcoat_pars_fragment:el,iridescence_pars_fragment:tl,opaque_fragment:nl,packing:il,premultiplied_alpha_fragment:al,project_vertex:rl,dithering_fragment:ol,dithering_pars_fragment:sl,roughnessmap_fragment:cl,roughnessmap_pars_fragment:ll,shadowmap_pars_fragment:fl,shadowmap_pars_vertex:dl,shadowmap_vertex:ul,shadowmask_pars_fragment:pl,skinbase_vertex:hl,skinning_pars_vertex:ml,skinning_vertex:gl,skinnormal_vertex:_l,specularmap_fragment:bl,specularmap_pars_fragment:vl,tonemapping_fragment:El,tonemapping_pars_fragment:Sl,transmission_fragment:xl,transmission_pars_fragment:Tl,uv_pars_fragment:Ml,uv_pars_vertex:Al,uv_vertex:Rl,worldpos_vertex:wl,background_vert:Cl,background_frag:Ll,backgroundCube_vert:Pl,backgroundCube_frag:Dl,cube_vert:Ul,cube_frag:yl,depth_vert:Il,depth_frag:Nl,distanceRGBA_vert:Fl,distanceRGBA_frag:Ol,equirect_vert:Hl,equirect_frag:Gl,linedashed_vert:Bl,linedashed_frag:kl,meshbasic_vert:Vl,meshbasic_frag:zl,meshlambert_vert:Wl,meshlambert_frag:Xl,meshmatcap_vert:jl,meshmatcap_frag:Kl,meshnormal_vert:ql,meshnormal_frag:Yl,meshphong_vert:Ql,meshphong_frag:Jl,meshphysical_vert:Zl,meshphysical_frag:$l,meshtoon_vert:ef,meshtoon_frag:tf,points_vert:nf,points_frag:af,shadow_vert:rf,shadow_frag:of,sprite_vert:sf,sprite_frag:cf},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},At={basic:{uniforms:pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:pt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:pt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:pt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:pt([ae.points,ae.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:pt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:pt([ae.common,ae.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:pt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:pt([ae.sprite,ae.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:pt([ae.common,ae.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:pt([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};At.physical={uniforms:pt([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Mn={r:0,b:0,g:0},Bt=new In,lf=new Rt;function ff(e,n,t,i,r,a,o){const s=new Ge(0);let l=a===!0?0:1,f,d,u=null,g=0,b=null;function M(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:n).get(_)),_}function A(S){let _=!1;const C=M(S);C===null?c(s,l):C&&C.isColor&&(c(C,1),_=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function p(S,_){const C=M(_);C&&(C.isCubeTexture||C.mapping===On)?(d===void 0&&(d=new at(new Si(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:la(At.backgroundCube.uniforms),vertexShader:At.backgroundCube.vertexShader,fragmentShader:At.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Bt.copy(_.backgroundRotation),Bt.x*=-1,Bt.y*=-1,Bt.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bt.y*=-1,Bt.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lf.makeRotationFromEuler(Bt)),d.material.toneMapped=nt.getTransfer(C.colorSpace)!==Ye,(u!==C||g!==C.version||b!==e.toneMapping)&&(d.material.needsUpdate=!0,u=C,g=C.version,b=e.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new at(new Ot(2,2),new Jt({name:"BackgroundMaterial",uniforms:la(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=nt.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||g!==C.version||b!==e.toneMapping)&&(f.material.needsUpdate=!0,u=C,g=C.version,b=e.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null))}function c(S,_){S.getRGB(Mn,cr(e)),i.buffers.color.setClear(Mn.r,Mn.g,Mn.b,_,o)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,_=1){s.set(S),l=_,c(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,c(s,l)},render:A,addToRenderList:p,dispose:T}}function df(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=g(null);let a=r,o=!1;function s(v,P,V,N,H){let j=!1;const z=u(N,V,P);a!==z&&(a=z,f(a.object)),j=b(v,N,V,H),j&&M(v,N,V,H),H!==null&&n.update(H,e.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(v,P,V,N),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function l(){return e.createVertexArray()}function f(v){return e.bindVertexArray(v)}function d(v){return e.deleteVertexArray(v)}function u(v,P,V){const N=V.wireframe===!0;let H=i[v.id];H===void 0&&(H={},i[v.id]=H);let j=H[P.id];j===void 0&&(j={},H[P.id]=j);let z=j[N];return z===void 0&&(z=g(l()),j[N]=z),z}function g(v){const P=[],V=[],N=[];for(let H=0;H<t;H++)P[H]=0,V[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:N,object:v,attributes:{},index:null}}function b(v,P,V,N){const H=a.attributes,j=P.attributes;let z=0;const Y=V.getAttributes();for(const k in Y)if(Y[k].location>=0){const de=H[k];let Pe=j[k];if(Pe===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Pe=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Pe=v.instanceColor)),de===void 0||de.attribute!==Pe||Pe&&de.data!==Pe.data)return!0;z++}return a.attributesNum!==z||a.index!==N}function M(v,P,V,N){const H={},j=P.attributes;let z=0;const Y=V.getAttributes();for(const k in Y)if(Y[k].location>=0){let de=j[k];de===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const Pe={};Pe.attribute=de,de&&de.data&&(Pe.data=de.data),H[k]=Pe,z++}a.attributes=H,a.attributesNum=z,a.index=N}function A(){const v=a.newAttributes;for(let P=0,V=v.length;P<V;P++)v[P]=0}function p(v){c(v,0)}function c(v,P){const V=a.newAttributes,N=a.enabledAttributes,H=a.attributeDivisors;V[v]=1,N[v]===0&&(e.enableVertexAttribArray(v),N[v]=1),H[v]!==P&&(e.vertexAttribDivisor(v,P),H[v]=P)}function T(){const v=a.newAttributes,P=a.enabledAttributes;for(let V=0,N=P.length;V<N;V++)P[V]!==v[V]&&(e.disableVertexAttribArray(V),P[V]=0)}function S(v,P,V,N,H,j,z){z===!0?e.vertexAttribIPointer(v,P,V,H,j):e.vertexAttribPointer(v,P,V,N,H,j)}function _(v,P,V,N){A();const H=N.attributes,j=V.getAttributes(),z=P.defaultAttributeValues;for(const Y in j){const k=j[Y];if(k.location>=0){let le=H[Y];if(le===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){const de=le.normalized,Pe=le.itemSize,Be=n.get(le);if(Be===void 0)continue;const Qe=Be.buffer,re=Be.type,ne=Be.bytesPerElement,F=re===e.INT||re===e.UNSIGNED_INT||le.gpuType===ir;if(le.isInterleavedBufferAttribute){const q=le.data,fe=q.stride,De=le.offset;if(q.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)c(k.location+Te,q.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let Te=0;Te<k.locationSize;Te++)S(k.location+Te,Pe/k.locationSize,re,de,fe*ne,(De+Pe/k.locationSize*Te)*ne,F)}else{if(le.isInstancedBufferAttribute){for(let q=0;q<k.locationSize;q++)c(k.location+q,le.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let q=0;q<k.locationSize;q++)p(k.location+q);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let q=0;q<k.locationSize;q++)S(k.location+q,Pe/k.locationSize,re,de,Pe*ne,Pe/k.locationSize*q*ne,F)}}else if(z!==void 0){const de=z[Y];if(de!==void 0)switch(de.length){case 2:e.vertexAttrib2fv(k.location,de);break;case 3:e.vertexAttrib3fv(k.location,de);break;case 4:e.vertexAttrib4fv(k.location,de);break;default:e.vertexAttrib1fv(k.location,de)}}}}T()}function C(){O();for(const v in i){const P=i[v];for(const V in P){const N=P[V];for(const H in N)d(N[H].object),delete N[H];delete P[V]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const V in P){const N=P[V];for(const H in N)d(N[H].object),delete N[H];delete P[V]}delete i[v.id]}function D(v){for(const P in i){const V=i[P];if(V[v.id]===void 0)continue;const N=V[v.id];for(const H in N)d(N[H].object),delete N[H];delete V[v.id]}}function O(){E(),o=!0,a!==r&&(a=r,f(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:O,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:p,disableUnusedAttributes:T}}function uf(e,n,t){let i;function r(f){i=f}function a(f,d){e.drawArrays(i,f,d),t.update(d,i,1)}function o(f,d,u){u!==0&&(e.drawArraysInstanced(i,f,d,u),t.update(d,i,u))}function s(f,d,u){if(u===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,d,0,u);let b=0;for(let M=0;M<u;M++)b+=d[M];t.update(b,i,1)}function l(f,d,u,g){if(u===0)return;const b=n.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<f.length;M++)o(f[M],d[M],g[M]);else{b.multiDrawArraysInstancedWEBGL(i,f,0,d,0,g,0,u);let M=0;for(let A=0;A<u;A++)M+=d[A]*g[A];t.update(M,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function pf(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const D=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Pt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(D){const O=D===Fn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(D!==Qt&&i.convert(D)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kt&&!O)}function l(D){if(D==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=l(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const u=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),b=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=M>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:f,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function hf(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new mo,s=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,g){const b=u.length!==0||g||i!==0||r;return r=g,i=u.length,b},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,g){t=d(u,g,0)},this.setState=function(u,g,b){const M=u.clippingPlanes,A=u.clipIntersection,p=u.clipShadows,c=e.get(u);if(!r||M===null||M.length===0||a&&!p)a?d(null):f();else{const T=a?0:i,S=T*4;let _=c.clippingState||null;l.value=_,_=d(M,g,S,b);for(let C=0;C!==S;++C)_[C]=t[C];c.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=T}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function d(u,g,b,M){const A=u!==null?u.length:0;let p=null;if(A!==0){if(p=l.value,M!==!0||p===null){const c=b+A*4,T=g.matrixWorldInverse;s.getNormalMatrix(T),(p===null||p.length<c)&&(p=new Float32Array(c));for(let S=0,_=b;S!==A;++S,_+=4)o.copy(u[S]).applyMatrix4(T,s),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return n.numPlanes=A,n.numIntersection=0,p}}function mf(e){let n=new WeakMap;function t(o,s){return s===hi?o.mapping=bn:s===mi&&(o.mapping=on),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===hi||s===mi)if(n.has(o)){const l=n.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const f=new Po(l.height);return f.fromEquirectangularTexture(e,o),n.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=n.get(s);l!==void 0&&(n.delete(s),l.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const tn=4,ma=[.125,.215,.35,.446,.526,.582],Wt=20,Yn=new Ka,ga=new Ge;let Qn=null,Jn=0,Zn=0,$n=!1;const zt=(1+Math.sqrt(5))/2,$t=1/zt,_a=[new pe(-zt,$t,0),new pe(zt,$t,0),new pe(-$t,0,zt),new pe($t,0,zt),new pe(0,zt,-$t),new pe(0,zt,$t),new pe(-1,1,-1),new pe(1,1,-1),new pe(-1,1,1),new pe(1,1,1)],gf=new pe;class ba{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:s=gf}=a;Qn=this._renderer.getRenderTarget(),Jn=this._renderer.getActiveCubeFace(),Zn=this._renderer.getActiveMipmapLevel(),$n=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(n,i,r,l,s),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Qn,Jn,Zn),this._renderer.xr.enabled=$n,n.scissorTest=!1,An(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===bn||n.mapping===on?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Qn=this._renderer.getRenderTarget(),Jn=this._renderer.getActiveCubeFace(),Zn=this._renderer.getActiveMipmapLevel(),$n=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Fn,format:Pt,colorSpace:_t,depthBuffer:!1},r=va(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=va(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(a)),this._blurMaterial=bf(a,n,t)}return r}_compileMaterial(n){const t=new at(this._lodPlanes[0],n);this._renderer.compile(t,Yn)}_sceneToCubeUV(n,t,i,r,a){const l=new gn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,g=u.autoClear,b=u.toneMapping;u.getClearColor(ga),u.toneMapping=yt,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const A=new jt({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),p=new at(new Si,A);let c=!1;const T=n.background;T?T.isColor&&(A.color.copy(T),n.background=null,c=!0):(A.color.copy(ga),c=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,f[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[S],a.y,a.z)):_===1?(l.up.set(0,0,f[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[S],a.z)):(l.up.set(0,f[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[S]));const C=this._cubeSize;An(r,_*C,S>2?C:0,C,C),u.setRenderTarget(r),c&&u.render(p,l),u.render(n,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=b,u.autoClear=g,n.background=T}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===bn||n.mapping===on;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=n;const l=this._cubeSize;An(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=_a[(r-a-1)%_a.length];this._blur(n,a-1,a,o,s)}t.autoClear=i}_blur(n,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(n,o,t,i,r,"latitudinal",a),this._halfBlur(o,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,o,s){const l=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new at(this._lodPlanes[r],f),g=f.uniforms,b=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*b):2*Math.PI/(2*Wt-1),A=a/M,p=isFinite(a)?1+Math.floor(d*A):Wt;p>Wt&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wt}`);const c=[];let T=0;for(let D=0;D<Wt;++D){const O=D/A,E=Math.exp(-O*O/2);c.push(E),D===0?T+=E:D<p&&(T+=2*E)}for(let D=0;D<c.length;D++)c[D]=c[D]/T;g.envMap.value=n.texture,g.samples.value=p,g.weights.value=c,g.latitudinal.value=o==="latitudinal",s&&(g.poleAxis.value=s);const{_lodMax:S}=this;g.dTheta.value=M,g.mipInt.value=S-i;const _=this._sizeLods[r],C=3*_*(r>S-tn?r-S+tn:0),w=4*(this._cubeSize-_);An(t,C,w,3*_,2*_),l.setRenderTarget(t),l.render(u,Yn)}}function _f(e){const n=[],t=[],i=[];let r=e;const a=e-tn+1+ma.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>e-tn?l=ma[o-e+tn-1]:o===0&&(l=0),i.push(l);const f=1/(s-2),d=-f,u=1+f,g=[d,d,u,d,u,u,d,d,u,u,d,u],b=6,M=6,A=3,p=2,c=1,T=new Float32Array(A*M*b),S=new Float32Array(p*M*b),_=new Float32Array(c*M*b);for(let w=0;w<b;w++){const D=w%3*2/3-1,O=w>2?0:-1,E=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];T.set(E,A*M*w),S.set(g,p*M*w);const v=[w,w,w,w,w,w];_.set(v,c*M*w)}const C=new Hn;C.setAttribute("position",new It(T,A)),C.setAttribute("uv",new It(S,p)),C.setAttribute("faceIndex",new It(_,c)),n.push(C),r>tn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function va(e,n,t){const i=new an(e,n,t);return i.texture.mapping=On,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function An(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function bf(e,n,t){const i=new Float32Array(Wt),r=new pe(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Wt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ti(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Ea(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ti(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Sa(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ti(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qt,depthTest:!1,depthWrite:!1})}function Ti(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vf(e){let n=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,f=l===hi||l===mi,d=l===bn||l===on;if(f||d){let u=n.get(s);const g=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==g)return t===null&&(t=new ba(e)),u=f?t.fromEquirectangular(s,u):t.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,n.set(s,u),u.texture;if(u!==void 0)return u.texture;{const b=s.image;return f&&b&&b.height>0||d&&b&&r(b)?(t===null&&(t=new ba(e)),u=f?t.fromEquirectangular(s):t.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,n.set(s,u),s.addEventListener("dispose",a),u.texture):null}}}return s}function r(s){let l=0;const f=6;for(let d=0;d<f;d++)s[d]!==void 0&&l++;return l===f}function a(s){const l=s.target;l.removeEventListener("dispose",a);const f=n.get(l);f!==void 0&&(n.delete(l),f.dispose())}function o(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ef(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&oi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sf(e,n,t,i){const r={},a=new WeakMap;function o(u){const g=u.target;g.index!==null&&n.remove(g.index);for(const M in g.attributes)n.remove(g.attributes[M]);g.removeEventListener("dispose",o),delete r[g.id];const b=a.get(g);b&&(n.remove(b),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function s(u,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function l(u){const g=u.attributes;for(const b in g)n.update(g[b],e.ARRAY_BUFFER)}function f(u){const g=[],b=u.index,M=u.attributes.position;let A=0;if(b!==null){const T=b.array;A=b.version;for(let S=0,_=T.length;S<_;S+=3){const C=T[S+0],w=T[S+1],D=T[S+2];g.push(C,w,w,D,D,C)}}else if(M!==void 0){const T=M.array;A=M.version;for(let S=0,_=T.length/3-1;S<_;S+=3){const C=S+0,w=S+1,D=S+2;g.push(C,w,w,D,D,C)}}else return;const p=new(Fo(g)?Io:No)(g,1);p.version=A;const c=a.get(u);c&&n.remove(c),a.set(u,p)}function d(u){const g=a.get(u);if(g){const b=u.index;b!==null&&g.version<b.version&&f(u)}else f(u);return a.get(u)}return{get:s,update:l,getWireframeAttribute:d}}function xf(e,n,t){let i;function r(g){i=g}let a,o;function s(g){a=g.type,o=g.bytesPerElement}function l(g,b){e.drawElements(i,b,a,g*o),t.update(b,i,1)}function f(g,b,M){M!==0&&(e.drawElementsInstanced(i,b,a,g*o,M),t.update(b,i,M))}function d(g,b,M){if(M===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,b,0,a,g,0,M);let p=0;for(let c=0;c<M;c++)p+=b[c];t.update(p,i,1)}function u(g,b,M,A){if(M===0)return;const p=n.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<g.length;c++)f(g[c]/o,b[c],A[c]);else{p.multiDrawElementsInstancedWEBGL(i,b,0,a,g,0,A,0,M);let c=0;for(let T=0;T<M;T++)c+=b[T]*A[T];t.update(c,i,1)}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Tf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=s*(a/3);break;case e.LINES:t.lines+=s*(a/2);break;case e.LINE_STRIP:t.lines+=s*(a-1);break;case e.LINE_LOOP:t.lines+=s*a;break;case e.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mf(e,n,t){const i=new WeakMap,r=new ht;function a(o,s,l){const f=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=d!==void 0?d.length:0;let g=i.get(s);if(g===void 0||g.count!==u){let E=function(){D.dispose(),i.delete(s),s.removeEventListener("dispose",E)};g!==void 0&&g.texture.dispose();const b=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,A=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],T=s.morphAttributes.color||[];let S=0;b===!0&&(S=1),M===!0&&(S=2),A===!0&&(S=3);let _=s.attributes.position.count*S,C=1;_>n.maxTextureSize&&(C=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const w=new Float32Array(_*C*4*u),D=new sr(w,_,C,u);D.type=Kt,D.needsUpdate=!0;const O=S*4;for(let v=0;v<u;v++){const P=p[v],V=c[v],N=T[v],H=_*C*4*v;for(let j=0;j<P.count;j++){const z=j*O;b===!0&&(r.fromBufferAttribute(P,j),w[H+z+0]=r.x,w[H+z+1]=r.y,w[H+z+2]=r.z,w[H+z+3]=0),M===!0&&(r.fromBufferAttribute(V,j),w[H+z+4]=r.x,w[H+z+5]=r.y,w[H+z+6]=r.z,w[H+z+7]=0),A===!0&&(r.fromBufferAttribute(N,j),w[H+z+8]=r.x,w[H+z+9]=r.y,w[H+z+10]=r.z,w[H+z+11]=N.itemSize===4?r.w:1)}}g={count:u,texture:D,size:new lt(_,C)},i.set(s,g),s.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let b=0;for(let A=0;A<f.length;A++)b+=f[A];const M=s.morphTargetsRelative?1:1-b;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",f)}l.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:a}}function Af(e,n,t,i){let r=new WeakMap;function a(l){const f=i.render.frame,d=l.geometry,u=n.get(l,d);if(r.get(u)!==f&&(n.update(u),r.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==f&&(t.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const g=l.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return u}function o(){r=new WeakMap}function s(l){const f=l.target;f.removeEventListener("dispose",s),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Tr=new gi,xa=new qa(1,1),Mr=new sr,Ar=new Ko,Rr=new jo,Ta=[],Ma=[],Aa=new Float32Array(16),Ra=new Float32Array(9),wa=new Float32Array(4);function fn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Ta[r];if(a===void 0&&(a=new Float32Array(r),Ta[r]=a),n!==0){i.toArray(a,0);for(let o=1,s=0;o!==n;++o)s+=t,e[o].toArray(a,s)}return a}function rt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ot(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Gn(e,n){let t=Ma[n];t===void 0&&(t=new Int32Array(n),Ma[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Rf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function wf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2fv(this.addr,n),ot(t,n)}}function Cf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(rt(t,n))return;e.uniform3fv(this.addr,n),ot(t,n)}}function Lf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4fv(this.addr,n),ot(t,n)}}function Pf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;wa.set(i),e.uniformMatrix2fv(this.addr,!1,wa),ot(t,i)}}function Df(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;Ra.set(i),e.uniformMatrix3fv(this.addr,!1,Ra),ot(t,i)}}function Uf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;Aa.set(i),e.uniformMatrix4fv(this.addr,!1,Aa),ot(t,i)}}function yf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function If(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2iv(this.addr,n),ot(t,n)}}function Nf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3iv(this.addr,n),ot(t,n)}}function Ff(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4iv(this.addr,n),ot(t,n)}}function Of(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Hf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2uiv(this.addr,n),ot(t,n)}}function Gf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3uiv(this.addr,n),ot(t,n)}}function Bf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4uiv(this.addr,n),ot(t,n)}}function kf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(xa.compareFunction=Za,a=xa):a=Tr,t.setTexture2D(n||a,r)}function Vf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Ar,r)}function zf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Rr,r)}function Wf(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Mr,r)}function Xf(e){switch(e){case 5126:return Rf;case 35664:return wf;case 35665:return Cf;case 35666:return Lf;case 35674:return Pf;case 35675:return Df;case 35676:return Uf;case 5124:case 35670:return yf;case 35667:case 35671:return If;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return Hf;case 36295:return Gf;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Wf}}function jf(e,n){e.uniform1fv(this.addr,n)}function Kf(e,n){const t=fn(n,this.size,2);e.uniform2fv(this.addr,t)}function qf(e,n){const t=fn(n,this.size,3);e.uniform3fv(this.addr,t)}function Yf(e,n){const t=fn(n,this.size,4);e.uniform4fv(this.addr,t)}function Qf(e,n){const t=fn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Jf(e,n){const t=fn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Zf(e,n){const t=fn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function $f(e,n){e.uniform1iv(this.addr,n)}function ed(e,n){e.uniform2iv(this.addr,n)}function td(e,n){e.uniform3iv(this.addr,n)}function nd(e,n){e.uniform4iv(this.addr,n)}function id(e,n){e.uniform1uiv(this.addr,n)}function ad(e,n){e.uniform2uiv(this.addr,n)}function rd(e,n){e.uniform3uiv(this.addr,n)}function od(e,n){e.uniform4uiv(this.addr,n)}function sd(e,n,t){const i=this.cache,r=n.length,a=Gn(t,r);rt(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let o=0;o!==r;++o)t.setTexture2D(n[o]||Tr,a[o])}function cd(e,n,t){const i=this.cache,r=n.length,a=Gn(t,r);rt(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||Ar,a[o])}function ld(e,n,t){const i=this.cache,r=n.length,a=Gn(t,r);rt(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||Rr,a[o])}function fd(e,n,t){const i=this.cache,r=n.length,a=Gn(t,r);rt(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||Mr,a[o])}function dd(e){switch(e){case 5126:return jf;case 35664:return Kf;case 35665:return qf;case 35666:return Yf;case 35674:return Qf;case 35675:return Jf;case 35676:return Zf;case 5124:case 35670:return $f;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return nd;case 5125:return id;case 36294:return ad;case 36295:return rd;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return sd;case 35679:case 36299:case 36307:return cd;case 35680:case 36300:case 36308:case 36293:return ld;case 36289:case 36303:case 36311:case 36292:return fd}}class ud{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xf(t.type)}}class pd{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dd(t.type)}}class hd{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(n,t[s.id],i)}}}const ei=/(\w+)(\])?(\[|\.)?/g;function Ca(e,n){e.seq.push(n),e.map[n.id]=n}function md(e,n,t){const i=e.name,r=i.length;for(ei.lastIndex=0;;){const a=ei.exec(i),o=ei.lastIndex;let s=a[1];const l=a[2]==="]",f=a[3];if(l&&(s=s|0),f===void 0||f==="["&&o+2===r){Ca(t,f===void 0?new ud(s,e,n):new pd(s,e,n));break}else{let u=t.map[s];u===void 0&&(u=new hd(s),Ca(t,u)),t=u}}}class Ln{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),o=n.getUniformLocation(t,a.name);md(a,o,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(n,l.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function La(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const gd=37297;let _d=0;function bd(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===n?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}const Pa=new ze;function vd(e){nt._getMatrix(Pa,nt.workingColorSpace,e);const n=`mat3( ${Pa.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case lr:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Da(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+bd(e.getShaderSource(n),s)}else return a}function Ed(e,n){const t=vd(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sd(e,n){let t;switch(n){case Xo:t="Linear";break;case Wo:t="Reinhard";break;case zo:t="Cineon";break;case Vo:t="ACESFilmic";break;case ko:t="AgX";break;case Bo:t="Neutral";break;case Go:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rn=new pe;function xd(){nt.getLuminanceCoefficients(Rn);const e=Rn.x.toFixed(4),n=Rn.y.toFixed(4),t=Rn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Td(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mn).join(`
`)}function Md(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Ad(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:s}}return t}function mn(e){return e!==""}function Ua(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ya(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Rd=/^[ \t]*#include +<([\w\d./]+)>/gm;function bi(e){return e.replace(Rd,Cd)}const wd=new Map;function Cd(e,n){let t=Fe[n];if(t===void 0){const i=wd.get(n);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return bi(t)}const Ld=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(e){return e.replace(Ld,Pd)}function Pd(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Na(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Dd(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===$a?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Ho?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Lt&&(n="SHADOWMAP_TYPE_VSM"),n}function Ud(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case bn:case on:n="ENVMAP_TYPE_CUBE";break;case On:n="ENVMAP_TYPE_CUBE_UV";break}return n}function yd(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===on&&(n="ENVMAP_MODE_REFRACTION"),n}function Id(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Jo:n="ENVMAP_BLENDING_MULTIPLY";break;case Qo:n="ENVMAP_BLENDING_MIX";break;case Yo:n="ENVMAP_BLENDING_ADD";break}return n}function Nd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Fd(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Dd(t),f=Ud(t),d=yd(t),u=Id(t),g=Nd(t),b=Td(t),M=Md(a),A=r.createProgram();let p,c,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(mn).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(mn).join(`
`),c.length>0&&(c+=`
`)):(p=[Na(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),c=[Na(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yt?"#define TONE_MAPPING":"",t.toneMapping!==yt?Fe.tonemapping_pars_fragment:"",t.toneMapping!==yt?Sd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Ed("linearToOutputTexel",t.outputColorSpace),xd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mn).join(`
`)),o=bi(o),o=Ua(o,t),o=ya(o,t),s=bi(s),s=Ua(s,t),s=ya(s,t),o=Ia(o),s=Ia(s),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",t.glslVersion===da?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=T+p+o,_=T+c+s,C=La(r,r.VERTEX_SHADER,S),w=La(r,r.FRAGMENT_SHADER,_);r.attachShader(A,C),r.attachShader(A,w),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function D(P){if(e.debug.checkShaderErrors){const V=r.getProgramInfoLog(A)||"",N=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(w)||"",j=V.trim(),z=N.trim(),Y=H.trim();let k=!0,le=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,A,C,w);else{const de=Da(r,C,"vertex"),Pe=Da(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+de+`
`+Pe)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(z===""||Y==="")&&(le=!1);le&&(P.diagnostics={runnable:k,programLog:j,vertexShader:{log:z,prefix:p},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(C),r.deleteShader(w),O=new Ln(r,A),E=Ad(r,A)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(A,gd)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_d++,this.cacheKey=n,this.usedTimes=1,this.program=A,this.vertexShader=C,this.fragmentShader=w,this}let Od=0;class Hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(n);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Gd(n),t.set(n,i)),i}}class Gd{constructor(n){this.id=Od++,this.code=n,this.usedTimes=0}}function Bd(e,n,t,i,r,a,o){const s=new Oo,l=new Hd,f=new Set,d=[],u=r.logarithmicDepthBuffer,g=r.vertexTextures;let b=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return f.add(E),E===0?"uv":`uv${E}`}function p(E,v,P,V,N){const H=V.fog,j=N.geometry,z=E.isMeshStandardMaterial?V.environment:null,Y=(E.isMeshStandardMaterial?t:n).get(E.envMap||z),k=Y&&Y.mapping===On?Y.image.height:null,le=M[E.type];E.precision!==null&&(b=r.getMaxPrecision(E.precision),b!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",b,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pe=de!==void 0?de.length:0;let Be=0;j.morphAttributes.position!==void 0&&(Be=1),j.morphAttributes.normal!==void 0&&(Be=2),j.morphAttributes.color!==void 0&&(Be=3);let Qe,re,ne,F;if(le){const We=At[le];Qe=We.vertexShader,re=We.fragmentShader}else Qe=E.vertexShader,re=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),F=l.getFragmentShaderID(E);const q=e.getRenderTarget(),fe=e.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,ke=!!E.map,ft=!!E.matcap,R=!!Y,Je=!!E.aoMap,ye=!!E.lightMap,Ce=!!E.bumpMap,_e=!!E.normalMap,Ze=!!E.displacementMap,be=!!E.emissiveMap,Ne=!!E.metalnessMap,st=!!E.roughnessMap,it=E.anisotropy>0,x=E.clearcoat>0,h=E.dispersion>0,I=E.iridescence>0,X=E.sheen>0,Q=E.transmission>0,W=it&&!!E.anisotropyMap,xe=x&&!!E.clearcoatMap,te=x&&!!E.clearcoatNormalMap,ve=x&&!!E.clearcoatRoughnessMap,Ee=I&&!!E.iridescenceMap,$=I&&!!E.iridescenceThicknessMap,ce=X&&!!E.sheenColorMap,we=X&&!!E.sheenRoughnessMap,Se=!!E.specularMap,oe=!!E.specularColorMap,Ie=!!E.specularIntensityMap,L=Q&&!!E.transmissionMap,ee=Q&&!!E.thicknessMap,ie=!!E.gradientMap,he=!!E.alphaMap,J=E.alphaTest>0,K=!!E.alphaHash,ge=!!E.extensions;let Ue=yt;E.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ue=e.toneMapping);const Ke={shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:Qe,fragmentShader:re,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:F,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:b,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:_t,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:ft,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:k,aoMap:Je,lightMap:ye,bumpMap:Ce,normalMap:_e,displacementMap:g&&Ze,emissiveMap:be,normalMapObjectSpace:_e&&E.normalMapType===yo,normalMapTangentSpace:_e&&E.normalMapType===Uo,metalnessMap:Ne,roughnessMap:st,anisotropy:it,anisotropyMap:W,clearcoat:x,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:ve,dispersion:h,iridescence:I,iridescenceMap:Ee,iridescenceThicknessMap:$,sheen:X,sheenColorMap:ce,sheenRoughnessMap:we,specularMap:Se,specularColorMap:oe,specularIntensityMap:Ie,transmission:Q,transmissionMap:L,thicknessMap:ee,gradientMap:ie,opaque:E.transparent===!1&&E.blending===Cn&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:K,combine:E.combine,mapUv:ke&&A(E.map.channel),aoMapUv:Je&&A(E.aoMap.channel),lightMapUv:ye&&A(E.lightMap.channel),bumpMapUv:Ce&&A(E.bumpMap.channel),normalMapUv:_e&&A(E.normalMap.channel),displacementMapUv:Ze&&A(E.displacementMap.channel),emissiveMapUv:be&&A(E.emissiveMap.channel),metalnessMapUv:Ne&&A(E.metalnessMap.channel),roughnessMapUv:st&&A(E.roughnessMap.channel),anisotropyMapUv:W&&A(E.anisotropyMap.channel),clearcoatMapUv:xe&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:$&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&A(E.sheenRoughnessMap.channel),specularMapUv:Se&&A(E.specularMap.channel),specularColorMapUv:oe&&A(E.specularColorMap.channel),specularIntensityMapUv:Ie&&A(E.specularIntensityMap.channel),transmissionMapUv:L&&A(E.transmissionMap.channel),thicknessMapUv:ee&&A(E.thicknessMap.channel),alphaMapUv:he&&A(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(_e||it),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(ke||he),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Be,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===Ye,decodeVideoTextureEmissive:be&&E.emissiveMap.isVideoTexture===!0&&nt.getTransfer(E.emissiveMap.colorSpace)===Ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===St,flipSided:E.side===xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ge&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&E.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=f.has(1),Ke.vertexUv2s=f.has(2),Ke.vertexUv3s=f.has(3),f.clear(),Ke}function c(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(T(v,E),S(v,E),v.push(e.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function T(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function S(E,v){s.disableAll(),v.supportsVertexTextures&&s.enable(0),v.instancing&&s.enable(1),v.instancingColor&&s.enable(2),v.instancingMorph&&s.enable(3),v.matcap&&s.enable(4),v.envMap&&s.enable(5),v.normalMapObjectSpace&&s.enable(6),v.normalMapTangentSpace&&s.enable(7),v.clearcoat&&s.enable(8),v.iridescence&&s.enable(9),v.alphaTest&&s.enable(10),v.vertexColors&&s.enable(11),v.vertexAlphas&&s.enable(12),v.vertexUv1s&&s.enable(13),v.vertexUv2s&&s.enable(14),v.vertexUv3s&&s.enable(15),v.vertexTangents&&s.enable(16),v.anisotropy&&s.enable(17),v.alphaHash&&s.enable(18),v.batching&&s.enable(19),v.dispersion&&s.enable(20),v.batchingColor&&s.enable(21),v.gradientMap&&s.enable(22),E.push(s.mask),s.disableAll(),v.fog&&s.enable(0),v.useFog&&s.enable(1),v.flatShading&&s.enable(2),v.logarithmicDepthBuffer&&s.enable(3),v.reversedDepthBuffer&&s.enable(4),v.skinning&&s.enable(5),v.morphTargets&&s.enable(6),v.morphNormals&&s.enable(7),v.morphColors&&s.enable(8),v.premultipliedAlpha&&s.enable(9),v.shadowMapEnabled&&s.enable(10),v.doubleSided&&s.enable(11),v.flipSided&&s.enable(12),v.useDepthPacking&&s.enable(13),v.dithering&&s.enable(14),v.transmission&&s.enable(15),v.sheen&&s.enable(16),v.opaque&&s.enable(17),v.pointsUvs&&s.enable(18),v.decodeVideoTexture&&s.enable(19),v.decodeVideoTextureEmissive&&s.enable(20),v.alphaToCoverage&&s.enable(21),E.push(s.mask)}function _(E){const v=M[E.type];let P;if(v){const V=At[v];P=Do.clone(V.uniforms)}else P=E.uniforms;return P}function C(E,v){let P;for(let V=0,N=d.length;V<N;V++){const H=d[V];if(H.cacheKey===v){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Fd(e,v,E,a),d.push(P)),P}function w(E){if(--E.usedTimes===0){const v=d.indexOf(E);d[v]=d[d.length-1],d.pop(),E.destroy()}}function D(E){l.remove(E)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:D,programs:d,dispose:O}}function kd(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function r(o,s,l){e.get(o)[s]=l}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function Vd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Fa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Oa(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(u,g,b,M,A,p){let c=e[n];return c===void 0?(c={id:u.id,object:u,geometry:g,material:b,groupOrder:M,renderOrder:u.renderOrder,z:A,group:p},e[n]=c):(c.id=u.id,c.object=u,c.geometry=g,c.material=b,c.groupOrder=M,c.renderOrder=u.renderOrder,c.z=A,c.group=p),n++,c}function s(u,g,b,M,A,p){const c=o(u,g,b,M,A,p);b.transmission>0?i.push(c):b.transparent===!0?r.push(c):t.push(c)}function l(u,g,b,M,A,p){const c=o(u,g,b,M,A,p);b.transmission>0?i.unshift(c):b.transparent===!0?r.unshift(c):t.unshift(c)}function f(u,g){t.length>1&&t.sort(u||Vd),i.length>1&&i.sort(g||Fa),r.length>1&&r.sort(g||Fa)}function d(){for(let u=n,g=e.length;u<g;u++){const b=e[u];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:d,sort:f}}function zd(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Oa,e.set(i,[o])):r>=a.length?(o=new Oa,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function Wd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new pe,color:new Ge};break;case"SpotLight":t={position:new pe,direction:new pe,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return e[n.id]=t,t}}}function Xd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let jd=0;function Kd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function qd(e){const n=new Wd,t=Xd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new pe);const r=new pe,a=new Rt,o=new Rt;function s(f){let d=0,u=0,g=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let b=0,M=0,A=0,p=0,c=0,T=0,S=0,_=0,C=0,w=0,D=0;f.sort(Kd);for(let E=0,v=f.length;E<v;E++){const P=f[E],V=P.color,N=P.intensity,H=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*N,u+=V.g*N,g+=V.b*N;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],N);D++}else if(P.isDirectionalLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[b]=k,i.directionalShadowMap[b]=j,i.directionalShadowMatrix[b]=P.shadow.matrix,T++}i.directional[b]=z,b++}else if(P.isSpotLight){const z=n.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(V).multiplyScalar(N),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[A]=z;const Y=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[A]=Y.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[A]=k,i.spotShadowMap[A]=j,_++}A++}else if(P.isRectAreaLight){const z=n.get(P);z.color.copy(V).multiplyScalar(N),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=z,p++}else if(P.isPointLight){const z=n.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const Y=P.shadow,k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[M]=k,i.pointShadowMap[M]=j,i.pointShadowMatrix[M]=P.shadow.matrix,S++}i.point[M]=z,M++}else if(P.isHemisphereLight){const z=n.get(P);z.skyColor.copy(P.color).multiplyScalar(N),z.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[c]=z,c++}}p>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==b||O.pointLength!==M||O.spotLength!==A||O.rectAreaLength!==p||O.hemiLength!==c||O.numDirectionalShadows!==T||O.numPointShadows!==S||O.numSpotShadows!==_||O.numSpotMaps!==C||O.numLightProbes!==D)&&(i.directional.length=b,i.spot.length=A,i.rectArea.length=p,i.point.length=M,i.hemi.length=c,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,O.directionalLength=b,O.pointLength=M,O.spotLength=A,O.rectAreaLength=p,O.hemiLength=c,O.numDirectionalShadows=T,O.numPointShadows=S,O.numSpotShadows=_,O.numSpotMaps=C,O.numLightProbes=D,i.version=jd++)}function l(f,d){let u=0,g=0,b=0,M=0,A=0;const p=d.matrixWorldInverse;for(let c=0,T=f.length;c<T;c++){const S=f[c];if(S.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),u++}else if(S.isSpotLight){const _=i.spot[b];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),b++}else if(S.isRectAreaLight){const _=i.rectArea[M];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){const _=i.point[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(p),g++}else if(S.isHemisphereLight){const _=i.hemi[A];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(p),A++}}}return{setup:s,setupView:l,state:i}}function Ha(e){const n=new qd(e),t=[],i=[];function r(d){f.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function s(){n.setup(t)}function l(d){n.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function Yd(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let s;return o===void 0?(s=new Ha(e),n.set(r,[s])):a>=o.length?(s=new Ha(e),o.push(s)):s=o[a],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const Qd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zd(e,n,t){let i=new ja;const r=new lt,a=new lt,o=new ht,s=new go({depthPacking:_o}),l=new bo,f={},d=t.maxTextureSize,u={[rn]:xt,[xt]:rn,[St]:St},g=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Qd,fragmentShader:Jd}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const M=new Hn;M.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new at(M,g),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let c=this.type;this.render=function(w,D,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=e.getRenderTarget(),v=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),V=e.state;V.setBlending(qt),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const N=c!==Lt&&this.type===Lt,H=c===Lt&&this.type!==Lt;for(let j=0,z=w.length;j<z;j++){const Y=w[j],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const le=k.getFrameExtents();if(r.multiply(le),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/le.x),r.x=a.x*le.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/le.y),r.y=a.y*le.y,k.mapSize.y=a.y)),k.map===null||N===!0||H===!0){const Pe=this.type!==Lt?{minFilter:Yt,magFilter:Yt}:{};k.map!==null&&k.map.dispose(),k.map=new an(r.x,r.y,Pe),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();const de=k.getViewportCount();for(let Pe=0;Pe<de;Pe++){const Be=k.getViewport(Pe);o.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),V.viewport(o),k.updateMatrices(Y,Pe),i=k.getFrustum(),_(D,O,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Lt&&T(k,O),k.needsUpdate=!1}c=this.type,p.needsUpdate=!1,e.setRenderTarget(E,v,P)};function T(w,D){const O=n.update(A);g.defines.VSM_SAMPLES!==w.blurSamples&&(g.defines.VSM_SAMPLES=w.blurSamples,b.defines.VSM_SAMPLES=w.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new an(r.x,r.y)),g.uniforms.shadow_pass.value=w.map.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(D,null,O,g,A,null),b.uniforms.shadow_pass.value=w.mapPass.texture,b.uniforms.resolution.value=w.mapSize,b.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(D,null,O,b,A,null)}function S(w,D,O,E){let v=null;const P=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=O.isPointLight===!0?l:s,e.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=v.uuid,N=D.uuid;let H=f[V];H===void 0&&(H={},f[V]=H);let j=H[N];j===void 0&&(j=v.clone(),H[N]=j,D.addEventListener("dispose",C)),v=j}if(v.visible=D.visible,v.wireframe=D.wireframe,E===Lt?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:u[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=e.properties.get(v);V.light=O}return v}function _(w,D,O,E,v){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Lt)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const N=n.update(w),H=w.material;if(Array.isArray(H)){const j=N.groups;for(let z=0,Y=j.length;z<Y;z++){const k=j[z],le=H[k.materialIndex];if(le&&le.visible){const de=S(w,le,E,v);w.onBeforeShadow(e,w,D,O,N,de,k),e.renderBufferDirect(O,null,N,de,w,k),w.onAfterShadow(e,w,D,O,N,de,k)}}}else if(H.visible){const j=S(w,H,E,v);w.onBeforeShadow(e,w,D,O,N,j,null),e.renderBufferDirect(O,null,N,j,w,null),w.onAfterShadow(e,w,D,O,N,j,null)}}const V=w.children;for(let N=0,H=V.length;N<H;N++)_(V[N],D,O,E,v)}function C(w){w.target.removeEventListener("dispose",C);for(const O in f){const E=f[O],v=w.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}const $d={[pi]:ui,[di]:ci,[fi]:si,[Dn]:li,[ui]:pi,[ci]:di,[si]:fi,[li]:Dn};function eu(e,n){function t(){let L=!1;const ee=new ht;let ie=null;const he=new ht(0,0,0,0);return{setMask:function(J){ie!==J&&!L&&(e.colorMask(J,J,J,J),ie=J)},setLocked:function(J){L=J},setClear:function(J,K,ge,Ue,Ke){Ke===!0&&(J*=Ue,K*=Ue,ge*=Ue),ee.set(J,K,ge,Ue),he.equals(ee)===!1&&(e.clearColor(J,K,ge,Ue),he.copy(ee))},reset:function(){L=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ee=!1,ie=null,he=null,J=null;return{setReversed:function(K){if(ee!==K){const ge=n.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ee=K;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(K){K?q(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(K){ie!==K&&!L&&(e.depthMask(K),ie=K)},setFunc:function(K){if(ee&&(K=$d[K]),he!==K){switch(K){case pi:e.depthFunc(e.NEVER);break;case ui:e.depthFunc(e.ALWAYS);break;case di:e.depthFunc(e.LESS);break;case Dn:e.depthFunc(e.LEQUAL);break;case fi:e.depthFunc(e.EQUAL);break;case li:e.depthFunc(e.GEQUAL);break;case ci:e.depthFunc(e.GREATER);break;case si:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}he=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(ee&&(K=1-K),e.clearDepth(K),J=K)},reset:function(){L=!1,ie=null,he=null,J=null,ee=!1}}}function r(){let L=!1,ee=null,ie=null,he=null,J=null,K=null,ge=null,Ue=null,Ke=null;return{setTest:function(We){L||(We?q(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(We){ee!==We&&!L&&(e.stencilMask(We),ee=We)},setFunc:function(We,Ct,Tt){(ie!==We||he!==Ct||J!==Tt)&&(e.stencilFunc(We,Ct,Tt),ie=We,he=Ct,J=Tt)},setOp:function(We,Ct,Tt){(K!==We||ge!==Ct||Ue!==Tt)&&(e.stencilOp(We,Ct,Tt),K=We,ge=Ct,Ue=Tt)},setLocked:function(We){L=We},setClear:function(We){Ke!==We&&(e.clearStencil(We),Ke=We)},reset:function(){L=!1,ee=null,ie=null,he=null,J=null,K=null,ge=null,Ue=null,Ke=null}}}const a=new t,o=new i,s=new r,l=new WeakMap,f=new WeakMap;let d={},u={},g=new WeakMap,b=[],M=null,A=!1,p=null,c=null,T=null,S=null,_=null,C=null,w=null,D=new Ge(0,0,0),O=0,E=!1,v=null,P=null,V=null,N=null,H=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=Y>=2);let le=null,de={};const Pe=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),Qe=new ht().fromArray(Pe),re=new ht().fromArray(Be);function ne(L,ee,ie,he){const J=new Uint8Array(4),K=e.createTexture();e.bindTexture(L,K),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ge=0;ge<ie;ge++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,he,0,e.RGBA,e.UNSIGNED_BYTE,J):e.texImage2D(ee+ge,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,J);return K}const F={};F[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),F[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),F[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),q(e.DEPTH_TEST),o.setFunc(Dn),Ce(!1),_e(ra),q(e.CULL_FACE),Je(qt);function q(L){d[L]!==!0&&(e.enable(L),d[L]=!0)}function fe(L){d[L]!==!1&&(e.disable(L),d[L]=!1)}function De(L,ee){return u[L]!==ee?(e.bindFramebuffer(L,ee),u[L]=ee,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ee),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(L,ee){let ie=b,he=!1;if(L){ie=g.get(ee),ie===void 0&&(ie=[],g.set(ee,ie));const J=L.textures;if(ie.length!==J.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let K=0,ge=J.length;K<ge;K++)ie[K]=e.COLOR_ATTACHMENT0+K;ie.length=J.length,he=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,he=!0);he&&e.drawBuffers(ie)}function ke(L){return M!==L?(e.useProgram(L),M=L,!0):!1}const ft={[un]:e.FUNC_ADD,[Xr]:e.FUNC_SUBTRACT,[Wr]:e.FUNC_REVERSE_SUBTRACT};ft[Zo]=e.MIN,ft[$o]=e.MAX;const R={[oo]:e.ZERO,[ro]:e.ONE,[ao]:e.SRC_COLOR,[io]:e.SRC_ALPHA,[no]:e.SRC_ALPHA_SATURATE,[to]:e.DST_COLOR,[eo]:e.DST_ALPHA,[$r]:e.ONE_MINUS_SRC_COLOR,[Zr]:e.ONE_MINUS_SRC_ALPHA,[Jr]:e.ONE_MINUS_DST_COLOR,[Qr]:e.ONE_MINUS_DST_ALPHA,[Yr]:e.CONSTANT_COLOR,[qr]:e.ONE_MINUS_CONSTANT_COLOR,[Kr]:e.CONSTANT_ALPHA,[jr]:e.ONE_MINUS_CONSTANT_ALPHA};function Je(L,ee,ie,he,J,K,ge,Ue,Ke,We){if(L===qt){A===!0&&(fe(e.BLEND),A=!1);return}if(A===!1&&(q(e.BLEND),A=!0),L!==Lo){if(L!==p||We!==E){if((c!==un||_!==un)&&(e.blendEquation(e.FUNC_ADD),c=un,_=un),We)switch(L){case Cn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ca:e.blendFunc(e.ONE,e.ONE);break;case sa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case oa:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ca:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case sa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,S=null,C=null,w=null,D.set(0,0,0),O=0,p=L,E=We}return}J=J||ee,K=K||ie,ge=ge||he,(ee!==c||J!==_)&&(e.blendEquationSeparate(ft[ee],ft[J]),c=ee,_=J),(ie!==T||he!==S||K!==C||ge!==w)&&(e.blendFuncSeparate(R[ie],R[he],R[K],R[ge]),T=ie,S=he,C=K,w=ge),(Ue.equals(D)===!1||Ke!==O)&&(e.blendColor(Ue.r,Ue.g,Ue.b,Ke),D.copy(Ue),O=Ke),p=L,E=!1}function ye(L,ee){L.side===St?fe(e.CULL_FACE):q(e.CULL_FACE);let ie=L.side===xt;ee&&(ie=!ie),Ce(ie),L.blending===Cn&&L.transparent===!1?Je(qt):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),a.setMask(L.colorWrite);const he=L.stencilWrite;s.setTest(he),he&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){v!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),v=L)}function _e(L){L!==wo?(q(e.CULL_FACE),L!==P&&(L===ra?e.cullFace(e.BACK):L===Co?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):fe(e.CULL_FACE),P=L}function Ze(L){L!==V&&(z&&e.lineWidth(L),V=L)}function be(L,ee,ie){L?(q(e.POLYGON_OFFSET_FILL),(N!==ee||H!==ie)&&(e.polygonOffset(ee,ie),N=ee,H=ie)):fe(e.POLYGON_OFFSET_FILL)}function Ne(L){L?q(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function st(L){L===void 0&&(L=e.TEXTURE0+j-1),le!==L&&(e.activeTexture(L),le=L)}function it(L,ee,ie){ie===void 0&&(le===null?ie=e.TEXTURE0+j-1:ie=le);let he=de[ie];he===void 0&&(he={type:void 0,texture:void 0},de[ie]=he),(he.type!==L||he.texture!==ee)&&(le!==ie&&(e.activeTexture(ie),le=ie),e.bindTexture(L,ee||F[L]),he.type=L,he.texture=ee)}function x(){const L=de[le];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function h(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){Qe.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function we(L){re.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function Se(L,ee){let ie=f.get(ee);ie===void 0&&(ie=new WeakMap,f.set(ee,ie));let he=ie.get(L);he===void 0&&(he=e.getUniformBlockIndex(ee,L.name),ie.set(L,he))}function oe(L,ee){const he=f.get(ee).get(L);l.get(ee)!==he&&(e.uniformBlockBinding(ee,he,L.__bindingPointIndex),l.set(ee,he))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},le=null,de={},u={},g=new WeakMap,b=[],M=null,A=!1,p=null,c=null,T=null,S=null,_=null,C=null,w=null,D=new Ge(0,0,0),O=0,E=!1,v=null,P=null,V=null,N=null,H=null,Qe.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:q,disable:fe,bindFramebuffer:De,drawBuffers:Te,useProgram:ke,setBlending:Je,setMaterial:ye,setFlipSided:Ce,setCullFace:_e,setLineWidth:Ze,setPolygonOffset:be,setScissorTest:Ne,activeTexture:st,bindTexture:it,unbindTexture:x,compressedTexImage2D:h,compressedTexImage3D:I,texImage2D:Ee,texImage3D:$,updateUBOMapping:Se,uniformBlockBinding:oe,texStorage2D:te,texStorage3D:ve,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:xe,scissor:ce,viewport:we,reset:Ie}}function tu(e,n,t,i,r,a,o){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new lt,d=new WeakMap;let u;const g=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(x,h){return b?new OffscreenCanvas(x,h):qo("canvas")}function A(x,h,I){let X=1;const Q=it(x);if((Q.width>I||Q.height>I)&&(X=I/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const W=Math.floor(X*Q.width),xe=Math.floor(X*Q.height);u===void 0&&(u=M(W,xe));const te=h?M(W,xe):u;return te.width=W,te.height=xe,te.getContext("2d").drawImage(x,0,0,W,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+xe+")."),te}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),x;return x}function p(x){return x.generateMipmaps}function c(x){e.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(x,h,I,X,Q=!1){if(x!==null){if(e[x]!==void 0)return e[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let W=h;if(h===e.RED&&(I===e.FLOAT&&(W=e.R32F),I===e.HALF_FLOAT&&(W=e.R16F),I===e.UNSIGNED_BYTE&&(W=e.R8)),h===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.R8UI),I===e.UNSIGNED_SHORT&&(W=e.R16UI),I===e.UNSIGNED_INT&&(W=e.R32UI),I===e.BYTE&&(W=e.R8I),I===e.SHORT&&(W=e.R16I),I===e.INT&&(W=e.R32I)),h===e.RG&&(I===e.FLOAT&&(W=e.RG32F),I===e.HALF_FLOAT&&(W=e.RG16F),I===e.UNSIGNED_BYTE&&(W=e.RG8)),h===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RG8UI),I===e.UNSIGNED_SHORT&&(W=e.RG16UI),I===e.UNSIGNED_INT&&(W=e.RG32UI),I===e.BYTE&&(W=e.RG8I),I===e.SHORT&&(W=e.RG16I),I===e.INT&&(W=e.RG32I)),h===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGB8UI),I===e.UNSIGNED_SHORT&&(W=e.RGB16UI),I===e.UNSIGNED_INT&&(W=e.RGB32UI),I===e.BYTE&&(W=e.RGB8I),I===e.SHORT&&(W=e.RGB16I),I===e.INT&&(W=e.RGB32I)),h===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),I===e.UNSIGNED_INT&&(W=e.RGBA32UI),I===e.BYTE&&(W=e.RGBA8I),I===e.SHORT&&(W=e.RGBA16I),I===e.INT&&(W=e.RGBA32I)),h===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),h===e.RGBA){const xe=Q?lr:nt.getTransfer(X);I===e.FLOAT&&(W=e.RGBA32F),I===e.HALF_FLOAT&&(W=e.RGBA16F),I===e.UNSIGNED_BYTE&&(W=xe===Ye?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&n.get("EXT_color_buffer_float"),W}function _(x,h){let I;return x?h===null||h===En||h===vn?I=e.DEPTH24_STENCIL8:h===Kt?I=e.DEPTH32F_STENCIL8:h===yn&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===En||h===vn?I=e.DEPTH_COMPONENT24:h===Kt?I=e.DEPTH_COMPONENT32F:h===yn&&(I=e.DEPTH_COMPONENT16),I}function C(x,h){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Yt&&x.minFilter!==Dt?Math.log2(Math.max(h.width,h.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?h.mipmaps.length:1}function w(x){const h=x.target;h.removeEventListener("dispose",w),O(h),h.isVideoTexture&&d.delete(h)}function D(x){const h=x.target;h.removeEventListener("dispose",D),v(h)}function O(x){const h=i.get(x);if(h.__webglInit===void 0)return;const I=x.source,X=g.get(I);if(X){const Q=X[h.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(x),Object.keys(X).length===0&&g.delete(I)}i.remove(x)}function E(x){const h=i.get(x);e.deleteTexture(h.__webglTexture);const I=x.source,X=g.get(I);delete X[h.__cacheKey],o.memory.textures--}function v(x){const h=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(h.__webglFramebuffer[X]))for(let Q=0;Q<h.__webglFramebuffer[X].length;Q++)e.deleteFramebuffer(h.__webglFramebuffer[X][Q]);else e.deleteFramebuffer(h.__webglFramebuffer[X]);h.__webglDepthbuffer&&e.deleteRenderbuffer(h.__webglDepthbuffer[X])}else{if(Array.isArray(h.__webglFramebuffer))for(let X=0;X<h.__webglFramebuffer.length;X++)e.deleteFramebuffer(h.__webglFramebuffer[X]);else e.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&e.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&e.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let X=0;X<h.__webglColorRenderbuffer.length;X++)h.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(h.__webglColorRenderbuffer[X]);h.__webglDepthRenderbuffer&&e.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const I=x.textures;for(let X=0,Q=I.length;X<Q;X++){const W=i.get(I[X]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(I[X])}i.remove(x)}let P=0;function V(){P=0}function N(){const x=P;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),P+=1,x}function H(x){const h=[];return h.push(x.wrapS),h.push(x.wrapT),h.push(x.wrapR||0),h.push(x.magFilter),h.push(x.minFilter),h.push(x.anisotropy),h.push(x.internalFormat),h.push(x.format),h.push(x.type),h.push(x.generateMipmaps),h.push(x.premultiplyAlpha),h.push(x.flipY),h.push(x.unpackAlignment),h.push(x.colorSpace),h.join()}function j(x,h){const I=i.get(x);if(x.isVideoTexture&&Ne(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&I.__version!==x.version){const X=x.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(I,x,h);return}}else x.isExternalTexture&&(I.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+h)}function z(x,h){const I=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&I.__version!==x.version){F(I,x,h);return}t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+h)}function Y(x,h){const I=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&I.__version!==x.version){F(I,x,h);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+h)}function k(x,h){const I=i.get(x);if(x.version>0&&I.__version!==x.version){q(I,x,h);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+h)}const le={[Un]:e.REPEAT,[Qa]:e.CLAMP_TO_EDGE,[Ya]:e.MIRRORED_REPEAT},de={[Yt]:e.NEAREST,[Ja]:e.NEAREST_MIPMAP_NEAREST,[hn]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[wn]:e.LINEAR_MIPMAP_NEAREST,[Xt]:e.LINEAR_MIPMAP_LINEAR},Pe={[ho]:e.NEVER,[po]:e.ALWAYS,[uo]:e.LESS,[Za]:e.LEQUAL,[fo]:e.EQUAL,[lo]:e.GEQUAL,[co]:e.GREATER,[so]:e.NOTEQUAL};function Be(x,h){if(h.type===Kt&&n.has("OES_texture_float_linear")===!1&&(h.magFilter===Dt||h.magFilter===wn||h.magFilter===hn||h.magFilter===Xt||h.minFilter===Dt||h.minFilter===wn||h.minFilter===hn||h.minFilter===Xt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,le[h.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,le[h.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,le[h.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,de[h.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,de[h.minFilter]),h.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,Pe[h.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===Yt||h.minFilter!==hn&&h.minFilter!==Xt||h.type===Kt&&n.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||i.get(h).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(x,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),i.get(h).__currentAnisotropy=h.anisotropy}}}function Qe(x,h){let I=!1;x.__webglInit===void 0&&(x.__webglInit=!0,h.addEventListener("dispose",w));const X=h.source;let Q=g.get(X);Q===void 0&&(Q={},g.set(X,Q));const W=H(h);if(W!==x.__cacheKey){Q[W]===void 0&&(Q[W]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[W].usedTimes++;const xe=Q[x.__cacheKey];xe!==void 0&&(Q[x.__cacheKey].usedTimes--,xe.usedTimes===0&&E(h)),x.__cacheKey=W,x.__webglTexture=Q[W].texture}return I}function re(x,h,I){return Math.floor(Math.floor(x/I)/h)}function ne(x,h,I,X){const W=x.updateRanges;if(W.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,h.width,h.height,I,X,h.data);else{W.sort(($,ce)=>$.start-ce.start);let xe=0;for(let $=1;$<W.length;$++){const ce=W[xe],we=W[$],Se=ce.start+ce.count,oe=re(we.start,h.width,4),Ie=re(ce.start,h.width,4);we.start<=Se+1&&oe===Ie&&re(we.start+we.count-1,h.width,4)===oe?ce.count=Math.max(ce.count,we.start+we.count-ce.start):(++xe,W[xe]=we)}W.length=xe+1;const te=e.getParameter(e.UNPACK_ROW_LENGTH),ve=e.getParameter(e.UNPACK_SKIP_PIXELS),Ee=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,h.width);for(let $=0,ce=W.length;$<ce;$++){const we=W[$],Se=Math.floor(we.start/4),oe=Math.ceil(we.count/4),Ie=Se%h.width,L=Math.floor(Se/h.width),ee=oe,ie=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),t.texSubImage2D(e.TEXTURE_2D,0,Ie,L,ee,ie,I,X,h.data)}x.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,te),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function F(x,h,I){let X=e.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),h.isData3DTexture&&(X=e.TEXTURE_3D);const Q=Qe(x,h),W=h.source;t.bindTexture(X,x.__webglTexture,e.TEXTURE0+I);const xe=i.get(W);if(W.version!==xe.__version||Q===!0){t.activeTexture(e.TEXTURE0+I);const te=nt.getPrimaries(nt.workingColorSpace),ve=h.colorSpace===en?null:nt.getPrimaries(h.colorSpace),Ee=h.colorSpace===en||te===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,h.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let $=A(h.image,!1,r.maxTextureSize);$=st(h,$);const ce=a.convert(h.format,h.colorSpace),we=a.convert(h.type);let Se=S(h.internalFormat,ce,we,h.colorSpace,h.isVideoTexture);Be(X,h);let oe;const Ie=h.mipmaps,L=h.isVideoTexture!==!0,ee=xe.__version===void 0||Q===!0,ie=W.dataReady,he=C(h,$);if(h.isDepthTexture)Se=_(h.format===Pn,h.type),ee&&(L?t.texStorage2D(e.TEXTURE_2D,1,Se,$.width,$.height):t.texImage2D(e.TEXTURE_2D,0,Se,$.width,$.height,0,ce,we,null));else if(h.isDataTexture)if(Ie.length>0){L&&ee&&t.texStorage2D(e.TEXTURE_2D,he,Se,Ie[0].width,Ie[0].height);for(let J=0,K=Ie.length;J<K;J++)oe=Ie[J],L?ie&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,we,oe.data):t.texImage2D(e.TEXTURE_2D,J,Se,oe.width,oe.height,0,ce,we,oe.data);h.generateMipmaps=!1}else L?(ee&&t.texStorage2D(e.TEXTURE_2D,he,Se,$.width,$.height),ie&&ne(h,$,ce,we)):t.texImage2D(e.TEXTURE_2D,0,Se,$.width,$.height,0,ce,we,$.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){L&&ee&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,Se,Ie[0].width,Ie[0].height,$.depth);for(let J=0,K=Ie.length;J<K;J++)if(oe=Ie[J],h.format!==Pt)if(ce!==null)if(L){if(ie)if(h.layerUpdates.size>0){const ge=fa(oe.width,oe.height,h.format,h.type);for(const Ue of h.layerUpdates){const Ke=oe.data.subarray(Ue*ge/oe.data.BYTES_PER_ELEMENT,(Ue+1)*ge/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Ue,oe.width,oe.height,1,ce,Ke)}h.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,$.depth,ce,oe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,Se,oe.width,oe.height,$.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,$.depth,ce,we,oe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,J,Se,oe.width,oe.height,$.depth,0,ce,we,oe.data)}else{L&&ee&&t.texStorage2D(e.TEXTURE_2D,he,Se,Ie[0].width,Ie[0].height);for(let J=0,K=Ie.length;J<K;J++)oe=Ie[J],h.format!==Pt?ce!==null?L?ie&&t.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(e.TEXTURE_2D,J,Se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,we,oe.data):t.texImage2D(e.TEXTURE_2D,J,Se,oe.width,oe.height,0,ce,we,oe.data)}else if(h.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,Se,$.width,$.height,$.depth),ie)if(h.layerUpdates.size>0){const J=fa($.width,$.height,h.format,h.type);for(const K of h.layerUpdates){const ge=$.data.subarray(K*J/$.data.BYTES_PER_ELEMENT,(K+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,$.width,$.height,1,ce,we,ge)}h.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ce,we,$.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,$.width,$.height,$.depth,0,ce,we,$.data);else if(h.isData3DTexture)L?(ee&&t.texStorage3D(e.TEXTURE_3D,he,Se,$.width,$.height,$.depth),ie&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ce,we,$.data)):t.texImage3D(e.TEXTURE_3D,0,Se,$.width,$.height,$.depth,0,ce,we,$.data);else if(h.isFramebufferTexture){if(ee)if(L)t.texStorage2D(e.TEXTURE_2D,he,Se,$.width,$.height);else{let J=$.width,K=$.height;for(let ge=0;ge<he;ge++)t.texImage2D(e.TEXTURE_2D,ge,Se,J,K,0,ce,we,null),J>>=1,K>>=1}}else if(Ie.length>0){if(L&&ee){const J=it(Ie[0]);t.texStorage2D(e.TEXTURE_2D,he,Se,J.width,J.height)}for(let J=0,K=Ie.length;J<K;J++)oe=Ie[J],L?ie&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ce,we,oe):t.texImage2D(e.TEXTURE_2D,J,Se,ce,we,oe);h.generateMipmaps=!1}else if(L){if(ee){const J=it($);t.texStorage2D(e.TEXTURE_2D,he,Se,J.width,J.height)}ie&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,we,$)}else t.texImage2D(e.TEXTURE_2D,0,Se,ce,we,$);p(h)&&c(X),xe.__version=W.version,h.onUpdate&&h.onUpdate(h)}x.__version=h.version}function q(x,h,I){if(h.image.length!==6)return;const X=Qe(x,h),Q=h.source;t.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+I);const W=i.get(Q);if(Q.version!==W.__version||X===!0){t.activeTexture(e.TEXTURE0+I);const xe=nt.getPrimaries(nt.workingColorSpace),te=h.colorSpace===en?null:nt.getPrimaries(h.colorSpace),ve=h.colorSpace===en||xe===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,h.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=h.isCompressedTexture||h.image[0].isCompressedTexture,$=h.image[0]&&h.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Ee&&!$?ce[K]=A(h.image[K],!0,r.maxCubemapSize):ce[K]=$?h.image[K].image:h.image[K],ce[K]=st(h,ce[K]);const we=ce[0],Se=a.convert(h.format,h.colorSpace),oe=a.convert(h.type),Ie=S(h.internalFormat,Se,oe,h.colorSpace),L=h.isVideoTexture!==!0,ee=W.__version===void 0||X===!0,ie=Q.dataReady;let he=C(h,we);Be(e.TEXTURE_CUBE_MAP,h);let J;if(Ee){L&&ee&&t.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ie,we.width,we.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let ge=0;ge<J.length;ge++){const Ue=J[ge];h.format!==Pt?Se!==null?L?ie&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Se,Ue.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ie,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Ue.width,Ue.height,Se,oe,Ue.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ie,Ue.width,Ue.height,0,Se,oe,Ue.data)}}}else{if(J=h.mipmaps,L&&ee){J.length>0&&he++;const K=it(ce[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,he,Ie,K.width,K.height)}for(let K=0;K<6;K++)if($){L?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Se,oe,ce[K].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,ce[K].width,ce[K].height,0,Se,oe,ce[K].data);for(let ge=0;ge<J.length;ge++){const Ke=J[ge].image[K].image;L?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Ke.width,Ke.height,Se,oe,Ke.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ie,Ke.width,Ke.height,0,Se,oe,Ke.data)}}else{L?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,oe,ce[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,Se,oe,ce[K]);for(let ge=0;ge<J.length;ge++){const Ue=J[ge];L?ie&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Se,oe,Ue.image[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ie,Se,oe,Ue.image[K])}}}p(h)&&c(e.TEXTURE_CUBE_MAP),W.__version=Q.version,h.onUpdate&&h.onUpdate(h)}x.__version=h.version}function fe(x,h,I,X,Q,W){const xe=a.convert(I.format,I.colorSpace),te=a.convert(I.type),ve=S(I.internalFormat,xe,te,I.colorSpace),Ee=i.get(h),$=i.get(I);if($.__renderTarget=h,!Ee.__hasExternalTextures){const ce=Math.max(1,h.width>>W),we=Math.max(1,h.height>>W);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?t.texImage3D(Q,W,ve,ce,we,h.depth,0,xe,te,null):t.texImage2D(Q,W,ve,ce,we,0,xe,te,null)}t.bindFramebuffer(e.FRAMEBUFFER,x),be(h)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,Q,$.__webglTexture,0,Ze(h)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,Q,$.__webglTexture,W),t.bindFramebuffer(e.FRAMEBUFFER,null)}function De(x,h,I){if(e.bindRenderbuffer(e.RENDERBUFFER,x),h.depthBuffer){const X=h.depthTexture,Q=X&&X.isDepthTexture?X.type:null,W=_(h.stencilBuffer,Q),xe=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=Ze(h);be(h)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,W,h.width,h.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,te,W,h.width,h.height):e.renderbufferStorage(e.RENDERBUFFER,W,h.width,h.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,xe,e.RENDERBUFFER,x)}else{const X=h.textures;for(let Q=0;Q<X.length;Q++){const W=X[Q],xe=a.convert(W.format,W.colorSpace),te=a.convert(W.type),ve=S(W.internalFormat,xe,te,W.colorSpace),Ee=Ze(h);I&&be(h)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ve,h.width,h.height):be(h)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee,ve,h.width,h.height):e.renderbufferStorage(e.RENDERBUFFER,ve,h.width,h.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(x,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,x),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(h.depthTexture);X.__renderTarget=h,(!X.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),j(h.depthTexture,0);const Q=X.__webglTexture,W=Ze(h);if(h.depthTexture.format===xi)be(h)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(h.depthTexture.format===Pn)be(h)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(x){const h=i.get(x),I=x.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==x.depthTexture){const X=x.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),X){const Q=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),h.__depthDisposeCallback=Q}h.__boundDepthTexture=X}if(x.depthTexture&&!h.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const X=x.texture.mipmaps;X&&X.length>0?Te(h.__webglFramebuffer[0],x):Te(h.__webglFramebuffer,x)}else if(I){h.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer[X]),h.__webglDepthbuffer[X]===void 0)h.__webglDepthbuffer[X]=e.createRenderbuffer(),De(h.__webglDepthbuffer[X],x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=h.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,W)}}else{const X=x.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=e.createRenderbuffer(),De(h.__webglDepthbuffer,x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=h.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,W)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(x,h,I){const X=i.get(x);h!==void 0&&fe(X.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&ke(x)}function R(x){const h=x.texture,I=i.get(x),X=i.get(h);x.addEventListener("dispose",D);const Q=x.textures,W=x.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=h.version,o.memory.textures++),W){I.__webglFramebuffer=[];for(let te=0;te<6;te++)if(h.mipmaps&&h.mipmaps.length>0){I.__webglFramebuffer[te]=[];for(let ve=0;ve<h.mipmaps.length;ve++)I.__webglFramebuffer[te][ve]=e.createFramebuffer()}else I.__webglFramebuffer[te]=e.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){I.__webglFramebuffer=[];for(let te=0;te<h.mipmaps.length;te++)I.__webglFramebuffer[te]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(xe)for(let te=0,ve=Q.length;te<ve;te++){const Ee=i.get(Q[te]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=e.createTexture(),o.memory.textures++)}if(x.samples>0&&be(x)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){const ve=Q[te];I.__webglColorRenderbuffer[te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[te]);const Ee=a.convert(ve.format,ve.colorSpace),$=a.convert(ve.type),ce=S(ve.internalFormat,Ee,$,ve.colorSpace,x.isXRRenderTarget===!0),we=Ze(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,ce,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+te,e.RENDERBUFFER,I.__webglColorRenderbuffer[te])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),De(I.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){t.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Be(e.TEXTURE_CUBE_MAP,h);for(let te=0;te<6;te++)if(h.mipmaps&&h.mipmaps.length>0)for(let ve=0;ve<h.mipmaps.length;ve++)fe(I.__webglFramebuffer[te][ve],x,h,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve);else fe(I.__webglFramebuffer[te],x,h,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(h)&&c(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,ve=Q.length;te<ve;te++){const Ee=Q[te],$=i.get(Ee);let ce=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ce=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),Be(ce,Ee),fe(I.__webglFramebuffer,x,Ee,e.COLOR_ATTACHMENT0+te,ce,0),p(Ee)&&c(ce)}t.unbindTexture()}else{let te=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(te=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(te,X.__webglTexture),Be(te,h),h.mipmaps&&h.mipmaps.length>0)for(let ve=0;ve<h.mipmaps.length;ve++)fe(I.__webglFramebuffer[ve],x,h,e.COLOR_ATTACHMENT0,te,ve);else fe(I.__webglFramebuffer,x,h,e.COLOR_ATTACHMENT0,te,0);p(h)&&c(te),t.unbindTexture()}x.depthBuffer&&ke(x)}function Je(x){const h=x.textures;for(let I=0,X=h.length;I<X;I++){const Q=h[I];if(p(Q)){const W=T(x),xe=i.get(Q).__webglTexture;t.bindTexture(W,xe),c(W),t.unbindTexture()}}}const ye=[],Ce=[];function _e(x){if(x.samples>0){if(be(x)===!1){const h=x.textures,I=x.width,X=x.height;let Q=e.COLOR_BUFFER_BIT;const W=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=i.get(x),te=h.length>1;if(te)for(let Ee=0;Ee<h.length;Ee++)t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ve=x.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<h.length;Ee++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const $=i.get(h[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$,0)}e.blitFramebuffer(0,0,I,X,0,0,I,X,Q,e.NEAREST),l===!0&&(ye.length=0,Ce.length=0,ye.push(e.COLOR_ATTACHMENT0+Ee),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ye.push(W),Ce.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),te)for(let Ee=0;Ee<h.length;Ee++){t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const $=i.get(h[Ee]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,xe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,$,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const h=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[h])}}}function Ze(x){return Math.min(r.maxSamples,x.samples)}function be(x){const h=i.get(x);return x.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function Ne(x){const h=o.render.frame;d.get(x)!==h&&(d.set(x,h),x.update())}function st(x,h){const I=x.colorSpace,X=x.format,Q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||I!==_t&&I!==en&&(nt.getTransfer(I)===Ye?(X!==Pt||Q!==Qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),h}function it(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(f.width=x.naturalWidth||x.width,f.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(f.width=x.displayWidth,f.height=x.displayHeight):(f.width=x.width,f.height=x.height),f}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=ft,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=be}function nu(e,n){function t(i,r=en){let a;const o=nt.getTransfer(r);if(i===Qt)return e.UNSIGNED_BYTE;if(i===er)return e.UNSIGNED_SHORT_4_4_4_4;if(i===tr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===vo)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Eo)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===So)return e.BYTE;if(i===xo)return e.SHORT;if(i===yn)return e.UNSIGNED_SHORT;if(i===ir)return e.INT;if(i===En)return e.UNSIGNED_INT;if(i===Kt)return e.FLOAT;if(i===Fn)return e.HALF_FLOAT;if(i===To)return e.ALPHA;if(i===Mo)return e.RGB;if(i===Pt)return e.RGBA;if(i===xi)return e.DEPTH_COMPONENT;if(i===Pn)return e.DEPTH_STENCIL;if(i===Ao)return e.RED;if(i===ar)return e.RED_INTEGER;if(i===Ro)return e.RG;if(i===rr)return e.RG_INTEGER;if(i===or)return e.RGBA_INTEGER;if(i===zn||i===Wn||i===Xn||i===jn)if(o===Ye)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===zn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===zn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Di||i===Ui||i===yi||i===Ii)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Di)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ui)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yi)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ii)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ni||i===Fi||i===Oi)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ni||i===Fi)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Oi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hi||i===Gi||i===Bi||i===ki||i===Vi||i===zi||i===Wi||i===Xi||i===ji||i===Ki||i===qi||i===Yi||i===Qi||i===Ji)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Hi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ki)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ji)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ki)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qi)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ji)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zi||i===$i||i===ea)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Zi)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$i)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ea)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ta||i===na||i===ia||i===aa)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===ta)return a.COMPRESSED_RED_RGTC1_EXT;if(i===na)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===aa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const iu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,au=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ru{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new nr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Jt({vertexShader:iu,fragmentShader:au,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Ot(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ou extends kr{constructor(n,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,f=null,d=null,u=null,g=null,b=null,M=null;const A=typeof XRWebGLBinding<"u",p=new ru,c={},T=t.getContextAttributes();let S=null,_=null;const C=[],w=[],D=new lt;let O=null;const E=new gn;E.viewport=new ht;const v=new gn;v.viewport=new ht;const P=[E,v],V=new Vr;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let q=C[F];return q===void 0&&(q=new Vn,C[F]=q),q.getTargetRaySpace()},this.getControllerGrip=function(F){let q=C[F];return q===void 0&&(q=new Vn,C[F]=q),q.getGripSpace()},this.getHand=function(F){let q=C[F];return q===void 0&&(q=new Vn,C[F]=q),q.getHandSpace()};function j(F){const q=w.indexOf(F.inputSource);if(q===-1)return;const fe=C[q];fe!==void 0&&(fe.update(F.inputSource,F.frame,f||o),fe.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let F=0;F<C.length;F++){const q=w[F];q!==null&&(w[F]=null,C[F].disconnect(q))}N=null,H=null,p.reset();for(const F in c)delete c[F];n.setRenderTarget(S),b=null,g=null,u=null,r=null,_=null,ne.stop(),i.isPresenting=!1,n.setPixelRatio(O),n.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(F){f=F},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return u===null&&A&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(S=n.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=n.getPixelRatio(),n.getSize(D),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,Te=null;T.depth&&(Te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?Pn:xi,De=T.stencil?vn:En);const ke={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};u=this.getBinding(),g=u.createProjectionLayer(ke),r.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),_=new an(g.textureWidth,g.textureHeight,{format:Pt,type:Qt,depthTexture:new qa(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:n.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};b=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:b}),n.setPixelRatio(1),n.setSize(b.framebufferWidth,b.framebufferHeight,!1),_=new an(b.framebufferWidth,b.framebufferHeight,{format:Pt,type:Qt,colorSpace:n.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),f=null,o=await r.requestReferenceSpace(s),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(F){for(let q=0;q<F.removed.length;q++){const fe=F.removed[q],De=w.indexOf(fe);De>=0&&(w[De]=null,C[De].disconnect(fe))}for(let q=0;q<F.added.length;q++){const fe=F.added[q];let De=w.indexOf(fe);if(De===-1){for(let ke=0;ke<C.length;ke++)if(ke>=w.length){w.push(fe),De=ke;break}else if(w[ke]===null){w[ke]=fe,De=ke;break}if(De===-1)break}const Te=C[De];Te&&Te.connect(fe)}}const k=new pe,le=new pe;function de(F,q,fe){k.setFromMatrixPosition(q.matrixWorld),le.setFromMatrixPosition(fe.matrixWorld);const De=k.distanceTo(le),Te=q.projectionMatrix.elements,ke=fe.projectionMatrix.elements,ft=Te[14]/(Te[10]-1),R=Te[14]/(Te[10]+1),Je=(Te[9]+1)/Te[5],ye=(Te[9]-1)/Te[5],Ce=(Te[8]-1)/Te[0],_e=(ke[8]+1)/ke[0],Ze=ft*Ce,be=ft*_e,Ne=De/(-Ce+_e),st=Ne*-Ce;if(q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(st),F.translateZ(Ne),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Te[10]===-1)F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const it=ft+Ne,x=R+Ne,h=Ze-st,I=be+(De-st),X=Je*R/x*it,Q=ye*R/x*it;F.projectionMatrix.makePerspective(h,I,X,Q,it,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Pe(F,q){q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let q=F.near,fe=F.far;p.texture!==null&&(p.depthNear>0&&(q=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),V.near=v.near=E.near=q,V.far=v.far=E.far=fe,(N!==V.near||H!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,H=V.far),V.layers.mask=F.layers.mask|6,E.layers.mask=V.layers.mask&3,v.layers.mask=V.layers.mask&5;const De=F.parent,Te=V.cameras;Pe(V,De);for(let ke=0;ke<Te.length;ke++)Pe(Te[ke],De);Te.length===2?de(V,E,v):V.projectionMatrix.copy(E.projectionMatrix),Be(F,V,De)};function Be(F,q,fe){fe===null?F.matrix.copy(q.matrixWorld):(F.matrix.copy(fe.matrixWorld),F.matrix.invert(),F.matrix.multiply(q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=zr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(g===null&&b===null))return l},this.setFoveation=function(F){l=F,g!==null&&(g.fixedFoveation=F),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(F){return c[F]};let Qe=null;function re(F,q){if(d=q.getViewerPose(f||o),M=q,d!==null){const fe=d.views;b!==null&&(n.setRenderTargetFramebuffer(_,b.framebuffer),n.setRenderTarget(_));let De=!1;fe.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let R=0;R<fe.length;R++){const Je=fe[R];let ye=null;if(b!==null)ye=b.getViewport(Je);else{const _e=u.getViewSubImage(g,Je);ye=_e.viewport,R===0&&(n.setRenderTargetTextures(_,_e.colorTexture,_e.depthStencilTexture),n.setRenderTarget(_))}let Ce=P[R];Ce===void 0&&(Ce=new gn,Ce.layers.enable(R),Ce.viewport=new ht,P[R]=Ce),Ce.matrix.fromArray(Je.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Je.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(ye.x,ye.y,ye.width,ye.height),R===0&&(V.matrix.copy(Ce.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(Ce)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){u=i.getBinding();const R=u.getDepthInformation(fe[0]);R&&R.isValid&&R.texture&&p.init(R,r.renderState)}if(Te&&Te.includes("camera-access")&&A){n.state.unbindTexture(),u=i.getBinding();for(let R=0;R<fe.length;R++){const Je=fe[R].camera;if(Je){let ye=c[Je];ye||(ye=new nr,c[Je]=ye);const Ce=u.getCameraImage(Je);ye.sourceTexture=Ce}}}}for(let fe=0;fe<C.length;fe++){const De=w[fe],Te=C[fe];De!==null&&Te!==void 0&&Te.update(De,q,f||o)}Qe&&Qe(F,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),M=null}const ne=new xr;ne.setAnimationLoop(re),this.setAnimationLoop=function(F){Qe=F},this.dispose=function(){}}}const kt=new In,su=new Rt;function cu(e,n){function t(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,cr(e)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,T,S,_){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(p,c):c.isMeshToonMaterial?(a(p,c),u(p,c)):c.isMeshPhongMaterial?(a(p,c),d(p,c)):c.isMeshStandardMaterial?(a(p,c),g(p,c),c.isMeshPhysicalMaterial&&b(p,c,_)):c.isMeshMatcapMaterial?(a(p,c),M(p,c)):c.isMeshDepthMaterial?a(p,c):c.isMeshDistanceMaterial?(a(p,c),A(p,c)):c.isMeshNormalMaterial?a(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&s(p,c)):c.isPointsMaterial?l(p,c,T,S):c.isSpriteMaterial?f(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,t(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===xt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,t(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===xt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,t(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,t(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const T=n.get(c),S=T.envMap,_=T.envMapRotation;S&&(p.envMap.value=S,kt.copy(_),kt.x*=-1,kt.y*=-1,kt.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kt.y*=-1,kt.z*=-1),p.envMapRotation.value.setFromMatrix4(su.makeRotationFromEuler(kt)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform))}function s(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,T,S){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*T,p.scale.value=S*.5,c.map&&(p.map.value=c.map,t(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function d(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function u(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function g(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function b(p,c,T){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===xt&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,p.specularIntensityMapTransform))}function M(p,c){c.matcap&&(p.matcap.value=c.matcap)}function A(p,c){const T=n.get(c).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lu(e,n,t,i){let r={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const _=S.program;i.uniformBlockBinding(T,_)}function f(T,S){let _=r[T.id];_===void 0&&(M(T),_=d(T),r[T.id]=_,T.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(T,C);const w=n.render.frame;a[T.id]!==w&&(g(T),a[T.id]=w)}function d(T){const S=u();T.__bindingPointIndex=S;const _=e.createBuffer(),C=T.__size,w=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,C,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,_),_}function u(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const S=r[T.id],_=T.uniforms,C=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let w=0,D=_.length;w<D;w++){const O=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,v=O.length;E<v;E++){const P=O[E];if(b(P,w,E,C)===!0){const V=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let j=0;j<N.length;j++){const z=N[j],Y=A(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,V+H,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function b(T,S,_,C){const w=T.value,D=S+"_"+_;if(C[D]===void 0)return typeof w=="number"||typeof w=="boolean"?C[D]=w:C[D]=w.clone(),!0;{const O=C[D];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return C[D]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function M(T){const S=T.uniforms;let _=0;const C=16;for(let D=0,O=S.length;D<O;D++){const E=Array.isArray(S[D])?S[D]:[S[D]];for(let v=0,P=E.length;v<P;v++){const V=E[v],N=Array.isArray(V.value)?V.value:[V.value];for(let H=0,j=N.length;H<j;H++){const z=N[H],Y=A(z),k=_%C,le=k%Y.boundary,de=k+le;_+=le,de!==0&&C-de<Y.storage&&(_+=C-de),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=Y.storage}}}const w=_%C;return w>0&&(_+=C-w),T.__size=_,T.__cache={},this}function A(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),e.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function c(){for(const T in r)e.deleteBuffer(r[T]);o=[],r={},a={}}return{bind:l,update:f,dispose:c}}class ip{constructor(n={}){const{canvas:t=Hr(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let b;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=i.getContextAttributes().alpha}else b=o;const M=new Uint32Array(4),A=new Int32Array(4);let p=null,c=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let C=!1;this._outputColorSpace=Ft;let w=0,D=0,O=null,E=-1,v=null;const P=new ht,V=new ht;let N=null;const H=new Ge(0);let j=0,z=t.width,Y=t.height,k=1,le=null,de=null;const Pe=new ht(0,0,z,Y),Be=new ht(0,0,z,Y);let Qe=!1;const re=new ja;let ne=!1,F=!1;const q=new Rt,fe=new pe,De=new ht,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ft(){return O===null?k:1}let R=i;function Je(m,U){return t.getContext(m,U)}try{const m={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gr}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){const U="webgl2";if(R=Je(U,m),R===null)throw Je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let ye,Ce,_e,Ze,be,Ne,st,it,x,h,I,X,Q,W,xe,te,ve,Ee,$,ce,we,Se,oe,Ie;function L(){ye=new Ef(R),ye.init(),Se=new nu(R,ye),Ce=new pf(R,ye,n,Se),_e=new eu(R,ye),Ce.reversedDepthBuffer&&g&&_e.buffers.depth.setReversed(!0),Ze=new Tf(R),be=new kd,Ne=new tu(R,ye,_e,be,Ce,Se,Ze),st=new mf(_),it=new vf(_),x=new Cs(R),oe=new df(R,x),h=new Sf(R,x,Ze,oe),I=new Af(R,h,x,Ze),$=new Mf(R,Ce,Ne),te=new hf(be),X=new Bd(_,st,it,ye,Ce,oe,te),Q=new cu(_,be),W=new zd,xe=new Yd(ye),Ee=new ff(_,st,it,_e,I,b,l),ve=new Zd(_,I,Ce),Ie=new lu(R,Ze,Ce,_e),ce=new uf(R,ye,Ze),we=new xf(R,ye,Ze),Ze.programs=X.programs,_.capabilities=Ce,_.extensions=ye,_.properties=be,_.renderLists=W,_.shadowMap=ve,_.state=_e,_.info=Ze}L();const ee=new ou(_,R);this.xr=ee,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const m=ye.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=ye.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(m){m!==void 0&&(k=m,this.setSize(z,Y,!1))},this.getSize=function(m){return m.set(z,Y)},this.setSize=function(m,U,G=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=m,Y=U,t.width=Math.floor(m*k),t.height=Math.floor(U*k),G===!0&&(t.style.width=m+"px",t.style.height=U+"px"),this.setViewport(0,0,m,U)},this.getDrawingBufferSize=function(m){return m.set(z*k,Y*k).floor()},this.setDrawingBufferSize=function(m,U,G){z=m,Y=U,k=G,t.width=Math.floor(m*G),t.height=Math.floor(U*G),this.setViewport(0,0,m,U)},this.getCurrentViewport=function(m){return m.copy(P)},this.getViewport=function(m){return m.copy(Pe)},this.setViewport=function(m,U,G,B){m.isVector4?Pe.set(m.x,m.y,m.z,m.w):Pe.set(m,U,G,B),_e.viewport(P.copy(Pe).multiplyScalar(k).round())},this.getScissor=function(m){return m.copy(Be)},this.setScissor=function(m,U,G,B){m.isVector4?Be.set(m.x,m.y,m.z,m.w):Be.set(m,U,G,B),_e.scissor(V.copy(Be).multiplyScalar(k).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(m){_e.setScissorTest(Qe=m)},this.setOpaqueSort=function(m){le=m},this.setTransparentSort=function(m){de=m},this.getClearColor=function(m){return m.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(m=!0,U=!0,G=!0){let B=0;if(m){let y=!1;if(O!==null){const Z=O.texture.format;y=Z===or||Z===rr||Z===ar}if(y){const Z=O.texture.type,se=Z===Qt||Z===En||Z===yn||Z===vn||Z===er||Z===tr,me=Ee.getClearColor(),ue=Ee.getClearAlpha(),Re=me.r,Le=me.g,Me=me.b;se?(M[0]=Re,M[1]=Le,M[2]=Me,M[3]=ue,R.clearBufferuiv(R.COLOR,0,M)):(A[0]=Re,A[1]=Le,A[2]=Me,A[3]=ue,R.clearBufferiv(R.COLOR,0,A))}else B|=R.COLOR_BUFFER_BIT}U&&(B|=R.DEPTH_BUFFER_BIT),G&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Ee.dispose(),W.dispose(),xe.dispose(),be.dispose(),st.dispose(),it.dispose(),I.dispose(),oe.dispose(),Ie.dispose(),X.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Tt),ee.removeEventListener("sessionend",Mi),Ht.stop()};function ie(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const m=Ze.autoReset,U=ve.enabled,G=ve.autoUpdate,B=ve.needsUpdate,y=ve.type;L(),Ze.autoReset=m,ve.enabled=U,ve.autoUpdate=G,ve.needsUpdate=B,ve.type=y}function J(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function K(m){const U=m.target;U.removeEventListener("dispose",K),ge(U)}function ge(m){Ue(m),be.remove(m)}function Ue(m){const U=be.get(m).programs;U!==void 0&&(U.forEach(function(G){X.releaseProgram(G)}),m.isShaderMaterial&&X.releaseShaderCache(m))}this.renderBufferDirect=function(m,U,G,B,y,Z){U===null&&(U=Te);const se=y.isMesh&&y.matrixWorld.determinant()<0,me=Ur(m,U,G,B,y);_e.setMaterial(B,se);let ue=G.index,Re=1;if(B.wireframe===!0){if(ue=h.getWireframeAttribute(G),ue===void 0)return;Re=2}const Le=G.drawRange,Me=G.attributes.position;let He=Le.start*Re,Xe=(Le.start+Le.count)*Re;Z!==null&&(He=Math.max(He,Z.start*Re),Xe=Math.min(Xe,(Z.start+Z.count)*Re)),ue!==null?(He=Math.max(He,0),Xe=Math.min(Xe,ue.count)):Me!=null&&(He=Math.max(He,0),Xe=Math.min(Xe,Me.count));const tt=Xe-He;if(tt<0||tt===1/0)return;oe.setup(y,B,me,G,ue);let qe,je=ce;if(ue!==null&&(qe=x.get(ue),je=we,je.setIndex(qe)),y.isMesh)B.wireframe===!0?(_e.setLineWidth(B.wireframeLinewidth*ft()),je.setMode(R.LINES)):je.setMode(R.TRIANGLES);else if(y.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*ft()),y.isLineSegments?je.setMode(R.LINES):y.isLineLoop?je.setMode(R.LINE_LOOP):je.setMode(R.LINE_STRIP)}else y.isPoints?je.setMode(R.POINTS):y.isSprite&&je.setMode(R.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))je.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else{const Ae=y._multiDrawStarts,$e=y._multiDrawCounts,Ve=y._multiDrawCount,mt=ue?x.get(ue).bytesPerElement:1,Zt=be.get(B).currentProgram.getUniforms();for(let gt=0;gt<Ve;gt++)Zt.setValue(R,"_gl_DrawID",gt),je.render(Ae[gt]/mt,$e[gt])}else if(y.isInstancedMesh)je.renderInstances(He,tt,y.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,$e=Math.min(G.instanceCount,Ae);je.renderInstances(He,tt,$e)}else je.render(He,tt)};function Ke(m,U,G){m.transparent===!0&&m.side===St&&m.forceSinglePass===!1?(m.side=xt,m.needsUpdate=!0,Tn(m,U,G),m.side=rn,m.needsUpdate=!0,Tn(m,U,G),m.side=St):Tn(m,U,G)}this.compile=function(m,U,G=null){G===null&&(G=m),c=xe.get(G),c.init(U),S.push(c),G.traverseVisible(function(y){y.isLight&&y.layers.test(U.layers)&&(c.pushLight(y),y.castShadow&&c.pushShadow(y))}),m!==G&&m.traverseVisible(function(y){y.isLight&&y.layers.test(U.layers)&&(c.pushLight(y),y.castShadow&&c.pushShadow(y))}),c.setupLights();const B=new Set;return m.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;const Z=y.material;if(Z)if(Array.isArray(Z))for(let se=0;se<Z.length;se++){const me=Z[se];Ke(me,G,y),B.add(me)}else Ke(Z,G,y),B.add(Z)}),c=S.pop(),B},this.compileAsync=function(m,U,G=null){const B=this.compile(m,U,G);return new Promise(y=>{function Z(){if(B.forEach(function(se){be.get(se).currentProgram.isReady()&&B.delete(se)}),B.size===0){y(m);return}setTimeout(Z,10)}ye.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let We=null;function Ct(m){We&&We(m)}function Tt(){Ht.stop()}function Mi(){Ht.start()}const Ht=new xr;Ht.setAnimationLoop(Ct),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(m){We=m,ee.setAnimationLoop(m),m===null?Ht.stop():Ht.start()},ee.addEventListener("sessionstart",Tt),ee.addEventListener("sessionend",Mi),this.render=function(m,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),m.isScene===!0&&m.onBeforeRender(_,m,U,O),c=xe.get(m,S.length),c.init(U),S.push(c),q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),re.setFromProjectionMatrix(q,Pi,U.reversedDepth),F=this.localClippingEnabled,ne=te.init(this.clippingPlanes,F),p=W.get(m,T.length),p.init(),T.push(p),ee.enabled===!0&&ee.isPresenting===!0){const Z=_.xr.getDepthSensingMesh();Z!==null&&Bn(Z,U,-1/0,_.sortObjects)}Bn(m,U,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(le,de),ke=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ke&&Ee.addToRenderList(p,m),this.info.render.frame++,ne===!0&&te.beginShadows();const G=c.state.shadowsArray;ve.render(G,m,U),ne===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,y=p.transmissive;if(c.setupLights(),U.isArrayCamera){const Z=U.cameras;if(y.length>0)for(let se=0,me=Z.length;se<me;se++){const ue=Z[se];Ri(B,y,m,ue)}ke&&Ee.render(m);for(let se=0,me=Z.length;se<me;se++){const ue=Z[se];Ai(p,m,ue,ue.viewport)}}else y.length>0&&Ri(B,y,m,U),ke&&Ee.render(m),Ai(p,m,U);O!==null&&D===0&&(Ne.updateMultisampleRenderTarget(O),Ne.updateRenderTargetMipmap(O)),m.isScene===!0&&m.onAfterRender(_,m,U),oe.resetDefaultState(),E=-1,v=null,S.pop(),S.length>0?(c=S[S.length-1],ne===!0&&te.setGlobalState(_.clippingPlanes,c.state.camera)):c=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Bn(m,U,G,B){if(m.visible===!1)return;if(m.layers.test(U.layers)){if(m.isGroup)G=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(U);else if(m.isLight)c.pushLight(m),m.castShadow&&c.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||re.intersectsSprite(m)){B&&De.setFromMatrixPosition(m.matrixWorld).applyMatrix4(q);const se=I.update(m),me=m.material;me.visible&&p.push(m,se,me,G,De.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||re.intersectsObject(m))){const se=I.update(m),me=m.material;if(B&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),De.copy(m.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),De.copy(se.boundingSphere.center)),De.applyMatrix4(m.matrixWorld).applyMatrix4(q)),Array.isArray(me)){const ue=se.groups;for(let Re=0,Le=ue.length;Re<Le;Re++){const Me=ue[Re],He=me[Me.materialIndex];He&&He.visible&&p.push(m,se,He,G,De.z,Me)}}else me.visible&&p.push(m,se,me,G,De.z,null)}}const Z=m.children;for(let se=0,me=Z.length;se<me;se++)Bn(Z[se],U,G,B)}function Ai(m,U,G,B){const y=m.opaque,Z=m.transmissive,se=m.transparent;c.setupLightsView(G),ne===!0&&te.setGlobalState(_.clippingPlanes,G),B&&_e.viewport(P.copy(B)),y.length>0&&xn(y,U,G),Z.length>0&&xn(Z,U,G),se.length>0&&xn(se,U,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ri(m,U,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[B.id]===void 0&&(c.state.transmissionRenderTarget[B.id]=new an(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Fn:Qt,minFilter:Xt,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Z=c.state.transmissionRenderTarget[B.id],se=B.viewport||P;Z.setSize(se.z*_.transmissionResolutionScale,se.w*_.transmissionResolutionScale);const me=_.getRenderTarget(),ue=_.getActiveCubeFace(),Re=_.getActiveMipmapLevel();_.setRenderTarget(Z),_.getClearColor(H),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),ke&&Ee.render(G);const Le=_.toneMapping;_.toneMapping=yt;const Me=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),c.setupLightsView(B),ne===!0&&te.setGlobalState(_.clippingPlanes,B),xn(m,G,B),Ne.updateMultisampleRenderTarget(Z),Ne.updateRenderTargetMipmap(Z),ye.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Xe=0,tt=U.length;Xe<tt;Xe++){const qe=U[Xe],je=qe.object,Ae=qe.geometry,$e=qe.material,Ve=qe.group;if($e.side===St&&je.layers.test(B.layers)){const mt=$e.side;$e.side=xt,$e.needsUpdate=!0,wi(je,G,B,Ae,$e,Ve),$e.side=mt,$e.needsUpdate=!0,He=!0}}He===!0&&(Ne.updateMultisampleRenderTarget(Z),Ne.updateRenderTargetMipmap(Z))}_.setRenderTarget(me,ue,Re),_.setClearColor(H,j),Me!==void 0&&(B.viewport=Me),_.toneMapping=Le}function xn(m,U,G){const B=U.isScene===!0?U.overrideMaterial:null;for(let y=0,Z=m.length;y<Z;y++){const se=m[y],me=se.object,ue=se.geometry,Re=se.group;let Le=se.material;Le.allowOverride===!0&&B!==null&&(Le=B),me.layers.test(G.layers)&&wi(me,U,G,ue,Le,Re)}}function wi(m,U,G,B,y,Z){m.onBeforeRender(_,U,G,B,y,Z),m.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),y.onBeforeRender(_,U,G,B,m,Z),y.transparent===!0&&y.side===St&&y.forceSinglePass===!1?(y.side=xt,y.needsUpdate=!0,_.renderBufferDirect(G,U,B,y,m,Z),y.side=rn,y.needsUpdate=!0,_.renderBufferDirect(G,U,B,y,m,Z),y.side=St):_.renderBufferDirect(G,U,B,y,m,Z),m.onAfterRender(_,U,G,B,y,Z)}function Tn(m,U,G){U.isScene!==!0&&(U=Te);const B=be.get(m),y=c.state.lights,Z=c.state.shadowsArray,se=y.state.version,me=X.getParameters(m,y.state,Z,U,G),ue=X.getProgramCacheKey(me);let Re=B.programs;B.environment=m.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(m.isMeshStandardMaterial?it:st).get(m.envMap||B.environment),B.envMapRotation=B.environment!==null&&m.envMap===null?U.environmentRotation:m.envMapRotation,Re===void 0&&(m.addEventListener("dispose",K),Re=new Map,B.programs=Re);let Le=Re.get(ue);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===se)return Li(m,me),Le}else me.uniforms=X.getUniforms(m),m.onBeforeCompile(me,_),Le=X.acquireProgram(me,ue),Re.set(ue,Le),B.uniforms=me.uniforms;const Me=B.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(Me.clippingPlanes=te.uniform),Li(m,me),B.needsLights=Ir(m),B.lightsStateVersion=se,B.needsLights&&(Me.ambientLightColor.value=y.state.ambient,Me.lightProbe.value=y.state.probe,Me.directionalLights.value=y.state.directional,Me.directionalLightShadows.value=y.state.directionalShadow,Me.spotLights.value=y.state.spot,Me.spotLightShadows.value=y.state.spotShadow,Me.rectAreaLights.value=y.state.rectArea,Me.ltc_1.value=y.state.rectAreaLTC1,Me.ltc_2.value=y.state.rectAreaLTC2,Me.pointLights.value=y.state.point,Me.pointLightShadows.value=y.state.pointShadow,Me.hemisphereLights.value=y.state.hemi,Me.directionalShadowMap.value=y.state.directionalShadowMap,Me.directionalShadowMatrix.value=y.state.directionalShadowMatrix,Me.spotShadowMap.value=y.state.spotShadowMap,Me.spotLightMatrix.value=y.state.spotLightMatrix,Me.spotLightMap.value=y.state.spotLightMap,Me.pointShadowMap.value=y.state.pointShadowMap,Me.pointShadowMatrix.value=y.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function Ci(m){if(m.uniformsList===null){const U=m.currentProgram.getUniforms();m.uniformsList=Ln.seqWithValue(U.seq,m.uniforms)}return m.uniformsList}function Li(m,U){const G=be.get(m);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Ur(m,U,G,B,y){U.isScene!==!0&&(U=Te),Ne.resetTextureUnits();const Z=U.fog,se=B.isMeshStandardMaterial?U.environment:null,me=O===null?_.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_t,ue=(B.isMeshStandardMaterial?it:st).get(B.envMap||se),Re=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!G.morphAttributes.position,He=!!G.morphAttributes.normal,Xe=!!G.morphAttributes.color;let tt=yt;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(tt=_.toneMapping);const qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,je=qe!==void 0?qe.length:0,Ae=be.get(B),$e=c.state.lights;if(ne===!0&&(F===!0||m!==v)){const dt=m===v&&B.id===E;te.setState(B,m,dt)}let Ve=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==$e.state.version||Ae.outputColorSpace!==me||y.isBatchedMesh&&Ae.batching===!1||!y.isBatchedMesh&&Ae.batching===!0||y.isBatchedMesh&&Ae.batchingColor===!0&&y.colorTexture===null||y.isBatchedMesh&&Ae.batchingColor===!1&&y.colorTexture!==null||y.isInstancedMesh&&Ae.instancing===!1||!y.isInstancedMesh&&Ae.instancing===!0||y.isSkinnedMesh&&Ae.skinning===!1||!y.isSkinnedMesh&&Ae.skinning===!0||y.isInstancedMesh&&Ae.instancingColor===!0&&y.instanceColor===null||y.isInstancedMesh&&Ae.instancingColor===!1&&y.instanceColor!==null||y.isInstancedMesh&&Ae.instancingMorph===!0&&y.morphTexture===null||y.isInstancedMesh&&Ae.instancingMorph===!1&&y.morphTexture!==null||Ae.envMap!==ue||B.fog===!0&&Ae.fog!==Z||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Le||Ae.morphTargets!==Me||Ae.morphNormals!==He||Ae.morphColors!==Xe||Ae.toneMapping!==tt||Ae.morphTargetsCount!==je)&&(Ve=!0):(Ve=!0,Ae.__version=B.version);let mt=Ae.currentProgram;Ve===!0&&(mt=Tn(B,U,y));let Zt=!1,gt=!1,dn=!1;const et=mt.getUniforms(),bt=Ae.uniforms;if(_e.useProgram(mt.program)&&(Zt=!0,gt=!0,dn=!0),B.id!==E&&(E=B.id,gt=!0),Zt||v!==m){_e.buffers.depth.getReversed()&&m.reversedDepth!==!0&&(m._reversedDepth=!0,m.updateProjectionMatrix()),et.setValue(R,"projectionMatrix",m.projectionMatrix),et.setValue(R,"viewMatrix",m.matrixWorldInverse);const ut=et.map.cameraPosition;ut!==void 0&&ut.setValue(R,fe.setFromMatrixPosition(m.matrixWorld)),Ce.logarithmicDepthBuffer&&et.setValue(R,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&et.setValue(R,"isOrthographic",m.isOrthographicCamera===!0),v!==m&&(v=m,gt=!0,dn=!0)}if(y.isSkinnedMesh){et.setOptional(R,y,"bindMatrix"),et.setOptional(R,y,"bindMatrixInverse");const dt=y.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),et.setValue(R,"boneTexture",dt.boneTexture,Ne))}y.isBatchedMesh&&(et.setOptional(R,y,"batchingTexture"),et.setValue(R,"batchingTexture",y._matricesTexture,Ne),et.setOptional(R,y,"batchingIdTexture"),et.setValue(R,"batchingIdTexture",y._indirectTexture,Ne),et.setOptional(R,y,"batchingColorTexture"),y._colorsTexture!==null&&et.setValue(R,"batchingColorTexture",y._colorsTexture,Ne));const vt=G.morphAttributes;if((vt.position!==void 0||vt.normal!==void 0||vt.color!==void 0)&&$.update(y,G,mt),(gt||Ae.receiveShadow!==y.receiveShadow)&&(Ae.receiveShadow=y.receiveShadow,et.setValue(R,"receiveShadow",y.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(bt.envMap.value=ue,bt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(bt.envMapIntensity.value=U.environmentIntensity),gt&&(et.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ae.needsLights&&yr(bt,dn),Z&&B.fog===!0&&Q.refreshFogUniforms(bt,Z),Q.refreshMaterialUniforms(bt,B,k,Y,c.state.transmissionRenderTarget[m.id]),Ln.upload(R,Ci(Ae),bt,Ne)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ln.upload(R,Ci(Ae),bt,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&et.setValue(R,"center",y.center),et.setValue(R,"modelViewMatrix",y.modelViewMatrix),et.setValue(R,"normalMatrix",y.normalMatrix),et.setValue(R,"modelMatrix",y.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const dt=B.uniformsGroups;for(let ut=0,kn=dt.length;ut<kn;ut++){const Gt=dt[ut];Ie.update(Gt,mt),Ie.bind(Gt,mt)}}return mt}function yr(m,U){m.ambientLightColor.needsUpdate=U,m.lightProbe.needsUpdate=U,m.directionalLights.needsUpdate=U,m.directionalLightShadows.needsUpdate=U,m.pointLights.needsUpdate=U,m.pointLightShadows.needsUpdate=U,m.spotLights.needsUpdate=U,m.spotLightShadows.needsUpdate=U,m.rectAreaLights.needsUpdate=U,m.hemisphereLights.needsUpdate=U}function Ir(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(m,U,G){const B=be.get(m);B.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),be.get(m.texture).__webglTexture=U,be.get(m.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,U){const G=be.get(m);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const Nr=R.createFramebuffer();this.setRenderTarget=function(m,U=0,G=0){O=m,w=U,D=G;let B=!0,y=null,Z=!1,se=!1;if(m){const ue=be.get(m);if(ue.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Ne.setupRenderTarget(m);else if(ue.__hasExternalTextures)Ne.rebindTextures(m,be.get(m.texture).__webglTexture,be.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){const Me=m.depthTexture;if(ue.__boundDepthTexture!==Me){if(Me!==null&&be.has(Me)&&(m.width!==Me.image.width||m.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(m)}}const Re=m.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(se=!0);const Le=be.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?y=Le[U][G]:y=Le[U],Z=!0):m.samples>0&&Ne.useMultisampledRTT(m)===!1?y=be.get(m).__webglMultisampledFramebuffer:Array.isArray(Le)?y=Le[G]:y=Le,P.copy(m.viewport),V.copy(m.scissor),N=m.scissorTest}else P.copy(Pe).multiplyScalar(k).floor(),V.copy(Be).multiplyScalar(k).floor(),N=Qe;if(G!==0&&(y=Nr),_e.bindFramebuffer(R.FRAMEBUFFER,y)&&B&&_e.drawBuffers(m,y),_e.viewport(P),_e.scissor(V),_e.setScissorTest(N),Z){const ue=be.get(m.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,G)}else if(se){const ue=U;for(let Re=0;Re<m.textures.length;Re++){const Le=be.get(m.textures[Re]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Re,Le.__webglTexture,G,ue)}}else if(m!==null&&G!==0){const ue=be.get(m.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ue.__webglTexture,G)}E=-1},this.readRenderTargetPixels=function(m,U,G,B,y,Z,se,me=0){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=be.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue){_e.bindFramebuffer(R.FRAMEBUFFER,ue);try{const Re=m.textures[me],Le=Re.format,Me=Re.type;if(!Ce.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=m.width-B&&G>=0&&G<=m.height-y&&(m.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,G,B,y,Se.convert(Le),Se.convert(Me),Z))}finally{const Re=O!==null?be.get(O).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(m,U,G,B,y,Z,se,me=0){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=be.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue)if(U>=0&&U<=m.width-B&&G>=0&&G<=m.height-y){_e.bindFramebuffer(R.FRAMEBUFFER,ue);const Re=m.textures[me],Le=Re.format,Me=Re.type;if(!Ce.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.bufferData(R.PIXEL_PACK_BUFFER,Z.byteLength,R.STREAM_READ),m.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+me),R.readPixels(U,G,B,y,Se.convert(Le),Se.convert(Me),0);const Xe=O!==null?be.get(O).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,Xe);const tt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Br(R,tt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Z),R.deleteBuffer(He),R.deleteSync(tt),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,U=null,G=0){const B=Math.pow(2,-G),y=Math.floor(m.image.width*B),Z=Math.floor(m.image.height*B),se=U!==null?U.x:0,me=U!==null?U.y:0;Ne.setTexture2D(m,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,se,me,y,Z),_e.unbindTexture()};const Fr=R.createFramebuffer(),Or=R.createFramebuffer();this.copyTextureToTexture=function(m,U,G=null,B=null,y=0,Z=null){Z===null&&(y!==0?(oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Z=y,y=0):Z=0);let se,me,ue,Re,Le,Me,He,Xe,tt;const qe=m.isCompressedTexture?m.mipmaps[Z]:m.image;if(G!==null)se=G.max.x-G.min.x,me=G.max.y-G.min.y,ue=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Le=G.min.y,Me=G.isBox3?G.min.z:0;else{const vt=Math.pow(2,-y);se=Math.floor(qe.width*vt),me=Math.floor(qe.height*vt),m.isDataArrayTexture?ue=qe.depth:m.isData3DTexture?ue=Math.floor(qe.depth*vt):ue=1,Re=0,Le=0,Me=0}B!==null?(He=B.x,Xe=B.y,tt=B.z):(He=0,Xe=0,tt=0);const je=Se.convert(U.format),Ae=Se.convert(U.type);let $e;U.isData3DTexture?(Ne.setTexture3D(U,0),$e=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),$e=R.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),$e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Ve=R.getParameter(R.UNPACK_ROW_LENGTH),mt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Zt=R.getParameter(R.UNPACK_SKIP_PIXELS),gt=R.getParameter(R.UNPACK_SKIP_ROWS),dn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,qe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Me);const et=m.isDataArrayTexture||m.isData3DTexture,bt=U.isDataArrayTexture||U.isData3DTexture;if(m.isDepthTexture){const vt=be.get(m),dt=be.get(U),ut=be.get(vt.__renderTarget),kn=be.get(dt.__renderTarget);_e.bindFramebuffer(R.READ_FRAMEBUFFER,ut.__webglFramebuffer),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Gt=0;Gt<ue;Gt++)et&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(m).__webglTexture,y,Me+Gt),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(U).__webglTexture,Z,tt+Gt)),R.blitFramebuffer(Re,Le,se,me,He,Xe,se,me,R.DEPTH_BUFFER_BIT,R.NEAREST);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(y!==0||m.isRenderTargetTexture||be.has(m)){const vt=be.get(m),dt=be.get(U);_e.bindFramebuffer(R.READ_FRAMEBUFFER,Fr),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,Or);for(let ut=0;ut<ue;ut++)et?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.__webglTexture,y,Me+ut):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,vt.__webglTexture,y),bt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,dt.__webglTexture,Z,tt+ut):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dt.__webglTexture,Z),y!==0?R.blitFramebuffer(Re,Le,se,me,He,Xe,se,me,R.COLOR_BUFFER_BIT,R.NEAREST):bt?R.copyTexSubImage3D($e,Z,He,Xe,tt+ut,Re,Le,se,me):R.copyTexSubImage2D($e,Z,He,Xe,Re,Le,se,me);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else bt?m.isDataTexture||m.isData3DTexture?R.texSubImage3D($e,Z,He,Xe,tt,se,me,ue,je,Ae,qe.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D($e,Z,He,Xe,tt,se,me,ue,je,qe.data):R.texSubImage3D($e,Z,He,Xe,tt,se,me,ue,je,Ae,qe):m.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Z,He,Xe,se,me,je,Ae,qe.data):m.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Z,He,Xe,qe.width,qe.height,je,qe.data):R.texSubImage2D(R.TEXTURE_2D,Z,He,Xe,se,me,je,Ae,qe);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ve),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Zt),R.pixelStorei(R.UNPACK_SKIP_ROWS,gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,dn),Z===0&&U.generateMipmaps&&R.generateMipmap($e),_e.unbindTexture()},this.initRenderTarget=function(m){be.get(m).__webglFramebuffer===void 0&&Ne.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?Ne.setTextureCube(m,0):m.isData3DTexture?Ne.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?Ne.setTexture2DArray(m,0):Ne.setTexture2D(m,0),_e.unbindTexture()},this.resetState=function(){w=0,D=0,O=null,_e.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}function fu(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,l=new Hn;let f=0;for(let d=0;d<e.length;++d){const u=e[d];let g=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const b in u.attributes){if(!i.has(b))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+b+'" attribute exists among all geometries, or in none of them.'),null;a[b]===void 0&&(a[b]=[]),a[b].push(u.attributes[b]),g++}if(g!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(s!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const b in u.morphAttributes){if(!r.has(b))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[b]===void 0&&(o[b]=[]),o[b].push(u.morphAttributes[b])}if(n){let b;if(t)b=u.index.count;else if(u.attributes.position!==void 0)b=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(f,b,d),f+=b}}if(t){let d=0;const u=[];for(let g=0;g<e.length;++g){const b=e[g].index;for(let M=0;M<b.count;++M)u.push(b.getX(M)+d);d+=e[g].attributes.position.count}l.setIndex(u)}for(const d in a){const u=Ga(a[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in o){const u=o[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let g=0;g<u;++g){const b=[];for(let A=0;A<o[d].length;++A)b.push(o[d][A][g]);const M=Ga(b);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(M)}}return l}function Ga(e){let n,t,i,r=-1,a=0;for(let f=0;f<e.length;++f){const d=e[f];if(n===void 0&&(n=d.array.constructor),n!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=d.count*t}const o=new n(a),s=new It(o,t,i);let l=0;for(let f=0;f<e.length;++f){const d=e[f];if(d.isInterleavedBufferAttribute){const u=l/t;for(let g=0,b=d.count;g<b;g++)for(let M=0;M<t;M++){const A=d.getComponent(g,M);s.setComponent(g+u,M,A)}}else o.set(d.array,l);l+=d.count*t}return r!==void 0&&(s.gpuType=r),s}function Ba(e,n){if(n===es)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(n===_i||n===fr){let t=e.getIndex();if(t===null){const o=[],s=e.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)o.push(l);e.setIndex(o),t=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=t.count-2,r=[];if(n===_i)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=e.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),e}class wr extends ts{constructor(n){super(n),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Lu(t)})}load(n,t,i,r){const a=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const f=_n.extractUrlBase(n);o=_n.resolveURL(f,this.path)}else o=_n.extractUrlBase(n);this.manager.itemStart(n);const s=function(f){r?r(f):console.error(f),a.manager.itemError(n),a.manager.itemEnd(n)},l=new dr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(n,function(f){try{a.parse(f,o,function(d){t(d),a.manager.itemEnd(n)},s)}catch(d){s(d)}},i,s)}setDRACOLoader(n){return this.dracoLoader=n,this}setKTX2Loader(n){return this.ktx2Loader=n,this}setMeshoptDecoder(n){return this.meshoptDecoder=n,this}register(n){return this.pluginCallbacks.indexOf(n)===-1&&this.pluginCallbacks.push(n),this}unregister(n){return this.pluginCallbacks.indexOf(n)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n),1),this}parse(n,t,i,r){let a;const o={},s={},l=new TextDecoder;if(typeof n=="string")a=JSON.parse(n);else if(n instanceof ArrayBuffer)if(l.decode(new Uint8Array(n,0,4))===Cr){try{o[Oe.KHR_BINARY_GLTF]=new Pu(n)}catch(u){r&&r(u);return}a=JSON.parse(o[Oe.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(n));else a=n;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new zu(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](f);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[u.name]=u,o[u.name]=!0}if(a.extensionsUsed)for(let d=0;d<a.extensionsUsed.length;++d){const u=a.extensionsUsed[d],g=a.extensionsRequired||[];switch(u){case Oe.KHR_MATERIALS_UNLIT:o[u]=new pu;break;case Oe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Du(a,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:o[u]=new Uu;break;case Oe.KHR_MESH_QUANTIZATION:o[u]=new yu;break;default:g.indexOf(u)>=0&&s[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}f.setExtensions(o),f.setPlugins(s),f.parse(i,r)}parseAsync(n,t){const i=this;return new Promise(function(r,a){i.parse(n,t,r,a)})}}function du(){let e={};return{get:function(n){return e[n]},add:function(n,t){e[n]=t},remove:function(n){delete e[n]},removeAll:function(){e={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uu{constructor(n){this.parser=n,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const n=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&n._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(n){const t=this.parser,i="light:"+n;let r=t.cache.get(i);if(r)return r;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[n];let f;const d=new Ge(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],_t);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":f=new as(d),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new is(d),f.distance=u;break;case"spot":f=new ns(d),f.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,f.angle=l.spot.outerConeAngle,f.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return f.position.set(0,0,0),Mt(f,l),l.intensity!==void 0&&(f.intensity=l.intensity),f.name=t.createUniqueName(l.name||"light_"+n),r=Promise.resolve(f),t.cache.add(i,r),r}getDependency(n,t){if(n==="light")return this._loadLight(t)}createNodeAttachment(n){const t=this,i=this.parser,a=i.json.nodes[n],s=(a.extensions&&a.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return i._getNodeRef(t.cache,s,l)})}}class pu{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(n,t,i){const r=[];n.color=new Ge(1,1,1),n.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const o=a.baseColorFactor;n.color.setRGB(o[0],o[1],o[2],_t),n.opacity=o[3]}a.baseColorTexture!==void 0&&r.push(i.assignTexture(n,"map",a.baseColorTexture,Ft))}return Promise.all(r)}}class hu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(n,t){const r=this.parser.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class mu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const s=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(s,s)}return Promise.all(a)}}class gu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const r=this.parser.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class _u{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(a)}}class bu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const s=o.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],_t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(a)}}class vu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(a)}}class Eu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const s=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(s[0],s[1],s[2],_t),Promise.all(a)}}class Su{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const r=this.parser.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class xu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const s=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(s[0],s[1],s[2],_t),o.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(a)}}class Tu{constructor(n){this.parser=n,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(a)}}class Mu{constructor(n){this.parser=n,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:wt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(a)}}class Au{constructor(n){this.parser=n,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(n){const t=this.parser,i=t.json,r=i.textures[n];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(n,a.source,o)}}class Ru{constructor(n){this.parser=n,this.name=Oe.EXT_TEXTURE_WEBP}loadTexture(n){const t=this.name,i=this.parser,r=i.json,a=r.textures[n];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],s=r.images[o.source];let l=i.textureLoader;if(s.uri){const f=i.options.manager.getHandler(s.uri);f!==null&&(l=f)}return i.loadTextureImage(n,o.source,l)}}class wu{constructor(n){this.parser=n,this.name=Oe.EXT_TEXTURE_AVIF}loadTexture(n){const t=this.name,i=this.parser,r=i.json,a=r.textures[n];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],s=r.images[o.source];let l=i.textureLoader;if(s.uri){const f=i.options.manager.getHandler(s.uri);f!==null&&(l=f)}return i.loadTextureImage(n,o.source,l)}}class Cu{constructor(n){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=n}loadBufferView(n){const t=this.parser.json,i=t.bufferViews[n];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){const l=r.byteOffset||0,f=r.byteLength||0,d=r.count,u=r.byteStride,g=new Uint8Array(s,l,f);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,g,r.mode,r.filter).then(function(b){return b.buffer}):o.ready.then(function(){const b=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(b),d,u,g,r.mode,r.filter),b})})}else return null}}class Lu{constructor(n){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=n}createNodeMesh(n){const t=this.parser.json,i=t.nodes[n];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const f of r.primitives)if(f.mode!==Et.TRIANGLES&&f.mode!==Et.TRIANGLE_STRIP&&f.mode!==Et.TRIANGLE_FAN&&f.mode!==void 0)return null;const o=i.extensions[this.name].attributes,s=[],l={};for(const f in o)s.push(this.parser.getDependency("accessor",o[f]).then(d=>(l[f]=d,l[f])));return s.length<1?null:(s.push(this.parser.createNodeMesh(n)),Promise.all(s).then(f=>{const d=f.pop(),u=d.isGroup?d.children:[d],g=f[0].count,b=[];for(const M of u){const A=new Rt,p=new pe,c=new Nn,T=new pe(1,1,1),S=new sn(M.geometry,M.material,g);for(let _=0;_<g;_++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&c.fromBufferAttribute(l.ROTATION,_),l.SCALE&&T.fromBufferAttribute(l.SCALE,_),S.setMatrixAt(_,A.compose(p,c,T));for(const _ in l)if(_==="_COLOR_0"){const C=l[_];S.instanceColor=new rs(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&M.geometry.setAttribute(_,l[_]);ln.prototype.copy.call(S,M),this.parser.assignFinalMaterial(S),b.push(S)}return d.isGroup?(d.clear(),d.add(...b),d):b[0]}))}}const Cr="glTF",pn=12,ka={JSON:1313821514,BIN:5130562};class Pu{constructor(n){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(n,0,pn),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(n.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cr)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-pn,a=new DataView(n,pn);let o=0;for(;o<r;){const s=a.getUint32(o,!0);o+=4;const l=a.getUint32(o,!0);if(o+=4,l===ka.JSON){const f=new Uint8Array(n,pn+o,s);this.content=i.decode(f)}else if(l===ka.BIN){const f=pn+o;this.body=n.slice(f,f+s)}o+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Du{constructor(n,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=n,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(n,t){const i=this.json,r=this.dracoLoader,a=n.extensions[this.name].bufferView,o=n.extensions[this.name].attributes,s={},l={},f={};for(const d in o){const u=vi[d]||d.toLowerCase();s[u]=o[d]}for(const d in n.attributes){const u=vi[d]||d.toLowerCase();if(o[d]!==void 0){const g=i.accessors[n.attributes[d]],b=nn[g.componentType];f[u]=b.name,l[u]=g.normalized===!0}}return t.getDependency("bufferView",a).then(function(d){return new Promise(function(u,g){r.decodeDracoFile(d,function(b){for(const M in b.attributes){const A=b.attributes[M],p=l[M];p!==void 0&&(A.normalized=p)}u(b)},s,f,_t,g)})})}}class Uu{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(n,t){return(t.texCoord===void 0||t.texCoord===n.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(n=n.clone(),t.texCoord!==void 0&&(n.channel=t.texCoord),t.offset!==void 0&&n.offset.fromArray(t.offset),t.rotation!==void 0&&(n.rotation=t.rotation),t.scale!==void 0&&n.repeat.fromArray(t.scale),n.needsUpdate=!0),n}}class yu{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Lr extends Ts{constructor(n,t,i,r){super(n,t,i,r)}copySampleValue_(n){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=n*r*3+r;for(let o=0;o!==r;o++)t[o]=i[a+o];return t}interpolate_(n,t,i,r){const a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=s*2,f=s*3,d=r-t,u=(i-t)/d,g=u*u,b=g*u,M=n*f,A=M-f,p=-2*b+3*g,c=b-g,T=1-p,S=c-g+u;for(let _=0;_!==s;_++){const C=o[A+_+s],w=o[A+_+l]*d,D=o[M+_+s],O=o[M+_]*d;a[_]=T*C+S*w+p*D+c*O}return a}}const Iu=new Nn;class Nu extends Lr{interpolate_(n,t,i,r){const a=super.interpolate_(n,t,i,r);return Iu.fromArray(a).normalize().toArray(a),a}}const Et={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},nn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Va={9728:Yt,9729:Dt,9984:Ja,9985:wn,9986:hn,9987:Xt},za={33071:Qa,33648:Ya,10497:Un},ti={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vi={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ut={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fu={CUBICSPLINE:void 0,LINEAR:ur,STEP:Ss},ni={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ou(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rn})),e.DefaultMaterial}function Vt(e,n,t){for(const i in t.extensions)e[i]===void 0&&(n.userData.gltfExtensions=n.userData.gltfExtensions||{},n.userData.gltfExtensions[i]=t.extensions[i])}function Mt(e,n){n.extras!==void 0&&(typeof n.extras=="object"?Object.assign(e.userData,n.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+n.extras))}function Hu(e,n,t){let i=!1,r=!1,a=!1;for(let f=0,d=n.length;f<d;f++){const u=n[f];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(a=!0),i&&r&&a)break}if(!i&&!r&&!a)return Promise.resolve(e);const o=[],s=[],l=[];for(let f=0,d=n.length;f<d;f++){const u=n[f];if(i){const g=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):e.attributes.position;o.push(g)}if(r){const g=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):e.attributes.normal;s.push(g)}if(a){const g=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(g)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l)]).then(function(f){const d=f[0],u=f[1],g=f[2];return i&&(e.morphAttributes.position=d),r&&(e.morphAttributes.normal=u),a&&(e.morphAttributes.color=g),e.morphTargetsRelative=!0,e})}function Gu(e,n){if(e.updateMorphTargets(),n.weights!==void 0)for(let t=0,i=n.weights.length;t<i;t++)e.morphTargetInfluences[t]=n.weights[t];if(n.extras&&Array.isArray(n.extras.targetNames)){const t=n.extras.targetNames;if(e.morphTargetInfluences.length===t.length){e.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)e.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bu(e){let n;const t=e.extensions&&e.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?n="draco:"+t.bufferView+":"+t.indices+":"+ii(t.attributes):n=e.indices+":"+ii(e.attributes)+":"+e.mode,e.targets!==void 0)for(let i=0,r=e.targets.length;i<r;i++)n+=":"+ii(e.targets[i]);return n}function ii(e){let n="";const t=Object.keys(e).sort();for(let i=0,r=t.length;i<r;i++)n+=t[i]+":"+e[t[i]]+";";return n}function Ei(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ku(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Vu=new Rt;class zu{constructor(n={},t={}){this.json=n,this.extensions={},this.plugins={},this.options=t,this.cache=new du,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,o=-1;if(typeof navigator<"u"){const s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;const l=s.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,a=s.indexOf("Firefox")>-1,o=a?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||a&&o<98?this.textureLoader=new os(this.options.manager):this.textureLoader=new ss(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(n){this.extensions=n}setPlugins(n){this.plugins=n}parse(n,t){const i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const s={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Vt(a,s,r),Mt(s,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(s)})).then(function(){for(const l of s.scenes)l.updateMatrixWorld();n(s)})}).catch(t)}_markDefs(){const n=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const o=t[r].joints;for(let s=0,l=o.length;s<l;s++)n[o[s]].isBone=!0}for(let r=0,a=n.length;r<a;r++){const o=n[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(n,t){t!==void 0&&(n.refs[t]===void 0&&(n.refs[t]=n.uses[t]=0),n.refs[t]++)}_getNodeRef(n,t,i){if(n.refs[t]<=1)return i;const r=i.clone(),a=(o,s)=>{const l=this.associations.get(o);l!=null&&this.associations.set(s,l);for(const[f,d]of o.children.entries())a(d,s.children[f])};return a(i,r),r.name+="_instance_"+n.uses[t]++,r}_invokeOne(n){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=n(t[i]);if(r)return r}return null}_invokeAll(n){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const a=n(t[r]);a&&i.push(a)}return i}getDependency(n,t){const i=n+":"+t;let r=this.cache.get(i);if(!r){switch(n){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(n,t)}),!r)throw new Error("Unknown type: "+n);break}this.cache.add(i,r)}return r}getDependencies(n){let t=this.cache.get(n);if(!t){const i=this,r=this.json[n+(n==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,o){return i.getDependency(n,o)})),this.cache.add(n,t)}return t}loadBuffer(n){const t=this.json.buffers[n],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&n===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,o){i.load(_n.resolveURL(t.uri,r.path),a,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(n){const t=this.json.bufferViews[n];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+r)})}loadAccessor(n){const t=this,i=this.json,r=this.json.accessors[n];if(r.bufferView===void 0&&r.sparse===void 0){const o=ti[r.type],s=nn[r.componentType],l=r.normalized===!0,f=new s(r.count*o);return Promise.resolve(new It(f,o,l))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(o){const s=o[0],l=ti[r.type],f=nn[r.componentType],d=f.BYTES_PER_ELEMENT,u=d*l,g=r.byteOffset||0,b=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let A,p;if(b&&b!==u){const c=Math.floor(g/b),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+c+":"+r.count;let S=t.cache.get(T);S||(A=new f(s,c*b,r.count*b/d),S=new cs(A,b/d),t.cache.add(T,S)),p=new xs(S,l,g%b/d,M)}else s===null?A=new f(r.count*l):A=new f(s,g,r.count*l),p=new It(A,l,M);if(r.sparse!==void 0){const c=ti.SCALAR,T=nn[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,C=new T(o[1],S,r.sparse.count*c),w=new f(o[2],_,r.sparse.count*l);s!==null&&(p=new It(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let D=0,O=C.length;D<O;D++){const E=C[D];if(p.setX(E,w[D*l]),l>=2&&p.setY(E,w[D*l+1]),l>=3&&p.setZ(E,w[D*l+2]),l>=4&&p.setW(E,w[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=M}return p})}loadTexture(n){const t=this.json,i=this.options,a=t.textures[n].source,o=t.images[a];let s=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(s=l)}return this.loadTextureImage(n,a,s)}loadTextureImage(n,t,i){const r=this,a=this.json,o=a.textures[n],s=a.images[t],l=(s.uri||s.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const f=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=o.name||s.name||"",d.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(d.name=s.uri);const g=(a.samplers||{})[o.sampler]||{};return d.magFilter=Va[g.magFilter]||Dt,d.minFilter=Va[g.minFilter]||Xt,d.wrapS=za[g.wrapS]||Un,d.wrapT=za[g.wrapT]||Un,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Yt&&d.minFilter!==Dt,r.associations.set(d,{textures:n}),d}).catch(function(){return null});return this.textureCache[l]=f,f}loadImageSource(n,t){const i=this,r=this.json,a=this.options;if(this.sourceCache[n]!==void 0)return this.sourceCache[n].then(u=>u.clone());const o=r.images[n],s=self.URL||self.webkitURL;let l=o.uri||"",f=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){f=!0;const g=new Blob([u],{type:o.mimeType});return l=s.createObjectURL(g),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+n+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(g,b){let M=g;t.isImageBitmapLoader===!0&&(M=function(A){const p=new gi(A);p.needsUpdate=!0,g(p)}),t.load(_n.resolveURL(u,a.path),M,void 0,b)})}).then(function(u){return f===!0&&s.revokeObjectURL(l),Mt(u,o),u.userData.mimeType=o.mimeType||ku(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[n]=d,d}assignTexture(n,t,i,r){const a=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),a.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const s=i.extensions!==void 0?i.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const l=a.associations.get(o);o=a.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,s),a.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),n[t]=o,o})}assignFinalMaterial(n){const t=n.geometry;let i=n.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(n.isPoints){const s="PointsMaterial:"+i.uuid;let l=this.cache.get(s);l||(l=new ls,Kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(s,l)),i=l}else if(n.isLine){const s="LineBasicMaterial:"+i.uuid;let l=this.cache.get(s);l||(l=new fs,Kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(s,l)),i=l}if(r||a||o){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),o&&(s+="flat-shading:");let l=this.cache.get(s);l||(l=i.clone(),a&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(s,l),this.associations.set(l,this.associations.get(i))),i=l}n.material=i}getMaterialType(){return ct}loadMaterial(n){const t=this,i=this.json,r=this.extensions,a=i.materials[n];let o;const s={},l=a.extensions||{},f=[];if(l[Oe.KHR_MATERIALS_UNLIT]){const u=r[Oe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),f.push(u.extendParams(s,a,t))}else{const u=a.pbrMetallicRoughness||{};if(s.color=new Ge(1,1,1),s.opacity=1,Array.isArray(u.baseColorFactor)){const g=u.baseColorFactor;s.color.setRGB(g[0],g[1],g[2],_t),s.opacity=g[3]}u.baseColorTexture!==void 0&&f.push(t.assignTexture(s,"map",u.baseColorTexture,Ft)),s.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,s.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(s,"metalnessMap",u.metallicRoughnessTexture)),f.push(t.assignTexture(s,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(n)}),f.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(n,s)})))}a.doubleSided===!0&&(s.side=St);const d=a.alphaMode||ni.OPAQUE;if(d===ni.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,d===ni.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&o!==jt&&(f.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new lt(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;s.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&o!==jt&&(f.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==jt){const u=a.emissiveFactor;s.emissive=new Ge().setRGB(u[0],u[1],u[2],_t)}return a.emissiveTexture!==void 0&&o!==jt&&f.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,Ft)),Promise.all(f).then(function(){const u=new o(s);return a.name&&(u.name=a.name),Mt(u,a),t.associations.set(u,{materials:n}),a.extensions&&Vt(r,u,a),u})}createUniqueName(n){const t=ds.sanitizeNodeName(n||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(n){const t=this,i=this.extensions,r=this.primitiveCache;function a(s){return i[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(l){return Wa(l,s,t)})}const o=[];for(let s=0,l=n.length;s<l;s++){const f=n[s],d=Bu(f),u=r[d];if(u)o.push(u.promise);else{let g;f.extensions&&f.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?g=a(f):g=Wa(new Hn,f,t),r[d]={primitive:f,promise:g},o.push(g)}}return Promise.all(o)}loadMesh(n){const t=this,i=this.json,r=this.extensions,a=i.meshes[n],o=a.primitives,s=[];for(let l=0,f=o.length;l<f;l++){const d=o[l].material===void 0?Ou(this.cache):this.getDependency("material",o[l].material);s.push(d)}return s.push(t.loadGeometries(o)),Promise.all(s).then(function(l){const f=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let b=0,M=d.length;b<M;b++){const A=d[b],p=o[b];let c;const T=f[b];if(p.mode===Et.TRIANGLES||p.mode===Et.TRIANGLE_STRIP||p.mode===Et.TRIANGLE_FAN||p.mode===void 0)c=a.isSkinnedMesh===!0?new us(A,T):new at(A,T),c.isSkinnedMesh===!0&&c.normalizeSkinWeights(),p.mode===Et.TRIANGLE_STRIP?c.geometry=Ba(c.geometry,fr):p.mode===Et.TRIANGLE_FAN&&(c.geometry=Ba(c.geometry,_i));else if(p.mode===Et.LINES)c=new ps(A,T);else if(p.mode===Et.LINE_STRIP)c=new hs(A,T);else if(p.mode===Et.LINE_LOOP)c=new ms(A,T);else if(p.mode===Et.POINTS)c=new gs(A,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(c.geometry.morphAttributes).length>0&&Gu(c,a),c.name=t.createUniqueName(a.name||"mesh_"+n),Mt(c,a),p.extensions&&Vt(r,c,p),t.assignFinalMaterial(c),u.push(c)}for(let b=0,M=u.length;b<M;b++)t.associations.set(u[b],{meshes:n,primitives:b});if(u.length===1)return a.extensions&&Vt(r,u[0],a),u[0];const g=new Nt;a.extensions&&Vt(r,g,a),t.associations.set(g,{meshes:n});for(let b=0,M=u.length;b<M;b++)g.add(u[b]);return g})}loadCamera(n){let t;const i=this.json.cameras[n],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new gn(_s.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ka(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mt(t,i),Promise.resolve(t)}loadSkin(n){const t=this.json.skins[n],i=[];for(let r=0,a=t.joints.length;r<a;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const a=r.pop(),o=r,s=[],l=[];for(let f=0,d=o.length;f<d;f++){const u=o[f];if(u){s.push(u);const g=new Rt;a!==null&&g.fromArray(a.array,f*16),l.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new bs(s,l)})}loadAnimation(n){const t=this.json,i=this,r=t.animations[n],a=r.name?r.name:"animation_"+n,o=[],s=[],l=[],f=[],d=[];for(let u=0,g=r.channels.length;u<g;u++){const b=r.channels[u],M=r.samplers[b.sampler],A=b.target,p=A.node,c=r.parameters!==void 0?r.parameters[M.input]:M.input,T=r.parameters!==void 0?r.parameters[M.output]:M.output;A.node!==void 0&&(o.push(this.getDependency("node",p)),s.push(this.getDependency("accessor",c)),l.push(this.getDependency("accessor",T)),f.push(M),d.push(A))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l),Promise.all(f),Promise.all(d)]).then(function(u){const g=u[0],b=u[1],M=u[2],A=u[3],p=u[4],c=[];for(let S=0,_=g.length;S<_;S++){const C=g[S],w=b[S],D=M[S],O=A[S],E=p[S];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const v=i._createAnimationTracks(C,w,D,O,E);if(v)for(let P=0;P<v.length;P++)c.push(v[P])}const T=new vs(a,void 0,c);return Mt(T,r),T})}createNodeMesh(n){const t=this.json,i=this,r=t.nodes[n];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(a){const o=i._getNodeRef(i.meshCache,r.mesh,a);return r.weights!==void 0&&o.traverse(function(s){if(s.isMesh)for(let l=0,f=r.weights.length;l<f;l++)s.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(n){const t=this.json,i=this,r=t.nodes[n],a=i._loadNodeShallow(n),o=[],s=r.children||[];for(let f=0,d=s.length;f<d;f++)o.push(i.getDependency("node",s[f]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([a,Promise.all(o),l]).then(function(f){const d=f[0],u=f[1],g=f[2];g!==null&&d.traverse(function(b){b.isSkinnedMesh&&b.bind(g,Vu)});for(let b=0,M=u.length;b<M;b++)d.add(u[b]);return d})}_loadNodeShallow(n){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[n]!==void 0)return this.nodeCache[n];const a=t.nodes[n],o=a.name?r.createUniqueName(a.name):"",s=[],l=r._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(n)});return l&&s.push(l),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(f){return r._getNodeRef(r.cameraCache,a.camera,f)})),r._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(n)}).forEach(function(f){s.push(f)}),this.nodeCache[n]=Promise.all(s).then(function(f){let d;if(a.isBone===!0?d=new Es:f.length>1?d=new Nt:f.length===1?d=f[0]:d=new ln,d!==f[0])for(let u=0,g=f.length;u<g;u++)d.add(f[u]);if(a.name&&(d.userData.name=a.name,d.name=o),Mt(d,a),a.extensions&&Vt(i,d,a),a.matrix!==void 0){const u=new Rt;u.fromArray(a.matrix),d.applyMatrix4(u)}else a.translation!==void 0&&d.position.fromArray(a.translation),a.rotation!==void 0&&d.quaternion.fromArray(a.rotation),a.scale!==void 0&&d.scale.fromArray(a.scale);if(!r.associations.has(d))r.associations.set(d,{});else if(a.mesh!==void 0&&r.meshCache.refs[a.mesh]>1){const u=r.associations.get(d);r.associations.set(d,{...u})}return r.associations.get(d).nodes=n,d}),this.nodeCache[n]}loadScene(n){const t=this.extensions,i=this.json.scenes[n],r=this,a=new Nt;i.name&&(a.name=r.createUniqueName(i.name)),Mt(a,i),i.extensions&&Vt(t,a,i);const o=i.nodes||[],s=[];for(let l=0,f=o.length;l<f;l++)s.push(r.getDependency("node",o[l]));return Promise.all(s).then(function(l){for(let d=0,u=l.length;d<u;d++)a.add(l[d]);const f=d=>{const u=new Map;for(const[g,b]of r.associations)(g instanceof Kn||g instanceof gi)&&u.set(g,b);return d.traverse(g=>{const b=r.associations.get(g);b!=null&&u.set(g,b)}),u};return r.associations=f(a),a})}_createAnimationTracks(n,t,i,r,a){const o=[],s=n.name?n.name:n.uuid,l=[];Ut[a.path]===Ut.weights?n.traverse(function(g){g.morphTargetInfluences&&l.push(g.name?g.name:g.uuid)}):l.push(s);let f;switch(Ut[a.path]){case Ut.weights:f=pa;break;case Ut.rotation:f=ha;break;case Ut.translation:case Ut.scale:f=ua;break;default:i.itemSize===1?f=pa:f=ua;break}const d=r.interpolation!==void 0?Fu[r.interpolation]:ur,u=this._getArrayFromAccessor(i);for(let g=0,b=l.length;g<b;g++){const M=new f(l[g]+"."+Ut[a.path],t.array,u,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),o.push(M)}return o}_getArrayFromAccessor(n){let t=n.array;if(n.normalized){const i=Ei(t.constructor),r=new Float32Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=t[a]*i;t=r}return t}_createCubicSplineTrackInterpolant(n){n.createInterpolant=function(i){const r=this instanceof ha?Nu:Lr;return new r(this.times,this.values,this.getValueSize()/3,i)},n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wu(e,n,t){const i=n.attributes,r=new pr;if(i.POSITION!==void 0){const s=t.json.accessors[i.POSITION],l=s.min,f=s.max;if(l!==void 0&&f!==void 0){if(r.set(new pe(l[0],l[1],l[2]),new pe(f[0],f[1],f[2])),s.normalized){const d=Ei(nn[s.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=n.targets;if(a!==void 0){const s=new pe,l=new pe;for(let f=0,d=a.length;f<d;f++){const u=a[f];if(u.POSITION!==void 0){const g=t.json.accessors[u.POSITION],b=g.min,M=g.max;if(b!==void 0&&M!==void 0){if(l.setX(Math.max(Math.abs(b[0]),Math.abs(M[0]))),l.setY(Math.max(Math.abs(b[1]),Math.abs(M[1]))),l.setZ(Math.max(Math.abs(b[2]),Math.abs(M[2]))),g.normalized){const A=Ei(nn[g.componentType]);l.multiplyScalar(A)}s.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(s)}e.boundingBox=r;const o=new Ms;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function Wa(e,n,t){const i=n.attributes,r=[];function a(o,s){return t.getDependency("accessor",o).then(function(l){e.setAttribute(s,l)})}for(const o in i){const s=vi[o]||o.toLowerCase();s in e.attributes||r.push(a(i[o],s))}if(n.indices!==void 0&&!e.index){const o=t.getDependency("accessor",n.indices).then(function(s){e.setIndex(s)});r.push(o)}return nt.workingColorSpace!==_t&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Mt(e,n),Wu(e,n,t),Promise.all(r).then(function(){return n.targets!==void 0?Hu(e,n.targets,t):e})}var Pr=(function(){var e="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",n="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?s(n):s(e),a,o=WebAssembly.instantiate(r,{}).then(function(c){a=c.instance,a.exports.__wasm_call_ctors()});function s(c){for(var T=new Uint8Array(c.length),S=0;S<c.length;++S){var _=c.charCodeAt(S);T[S]=_>96?_-97:_>64?_-39:_+4}for(var C=0,S=0;S<c.length;++S)T[C++]=T[S]<60?i[T[S]]:(T[S]-60)*64+T[++S];return T.buffer.slice(0,C)}function l(c,T,S,_,C,w,D){var O=c.exports.sbrk,E=_+3&-4,v=O(E*C),P=O(w.length),V=new Uint8Array(c.exports.memory.buffer);V.set(w,P);var N=T(v,_,C,P,w.length);if(N==0&&D&&D(v,E,C),S.set(V.subarray(v,v+_*C)),O(v-O(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var f={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],g=0;function b(c){var T={object:new Worker(c),pending:0,requests:{}};return T.object.onmessage=function(S){var _=S.data;T.pending-=_.count,T.requests[_.id][_.action](_.value),delete T.requests[_.id]},T}function M(c){for(var T="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+l.toString()+p.toString(),S=new Blob([T],{type:"text/javascript"}),_=URL.createObjectURL(S),C=u.length;C<c;++C)u[C]=b(_);for(var C=c;C<u.length;++C)u[C].object.postMessage({});u.length=c,URL.revokeObjectURL(_)}function A(c,T,S,_,C){for(var w=u[0],D=1;D<u.length;++D)u[D].pending<w.pending&&(w=u[D]);return new Promise(function(O,E){var v=new Uint8Array(S),P=++g;w.pending+=c,w.requests[P]={resolve:O,reject:E},w.object.postMessage({id:P,count:c,size:T,source:v,mode:_,filter:C},[v.buffer])})}function p(c){var T=c.data;if(!T.id)return self.close();self.ready.then(function(S){try{var _=new Uint8Array(T.count*T.size);l(S,S.exports[T.mode],_,T.count,T.size,T.source,S.exports[T.filter]),self.postMessage({id:T.id,count:T.count,action:"resolve",value:_},[_.buffer])}catch(C){self.postMessage({id:T.id,count:T.count,action:"reject",value:C})}})}return{ready:o,supported:!0,useWorkers:function(c){M(c)},decodeVertexBuffer:function(c,T,S,_,C){l(a,a.exports.meshopt_decodeVertexBuffer,c,T,S,_,a.exports[f[C]])},decodeIndexBuffer:function(c,T,S,_){l(a,a.exports.meshopt_decodeIndexBuffer,c,T,S,_)},decodeIndexSequence:function(c,T,S,_){l(a,a.exports.meshopt_decodeIndexSequence,c,T,S,_)},decodeGltfBuffer:function(c,T,S,_,C,w){l(a,a.exports[d[C]],c,T,S,_,a.exports[f[w]])},decodeGltfBufferAsync:function(c,T,S,_,C){return u.length>0?A(c,T,S,d[_],f[C]):o.then(function(){var w=new Uint8Array(c*T);return l(a,a.exports[d[_]],w,c,T,S,a.exports[f[C]]),w})}}})();const Sn=e=>()=>{e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};class cn{buckets=new Map;solids=[];add(n,t,i=0,r=0,a=0,o=new In){n.applyMatrix4(new Rt().compose(new pe(i,r,a),new Nn().setFromEuler(o),new pe(1,1,1))),n.getAttribute("uv")||n.setAttribute("uv",new hr(new Float32Array(n.getAttribute("position").count*2),2));const s=this.buckets.get(t)??[];s.push(n),this.buckets.set(t,s)}box(n,t,i,r,a,o,s,l=!1,f=0,d=2){const u=new Si(n,t,i),g=u.getAttribute("uv");for(let b=0;b<6;b++){const M=(b<2?i:n)/d,A=(b===2||b===3?i:t)/d;for(let p=0;p<4;p++){const c=b*4+p;g.setXY(c,g.getX(c)*M,g.getY(c)*A)}}this.add(u,s,r,a,o,new In(0,f,0)),l&&this.solids.push({x:r,y:a,z:o,w:n,h:t,d:i,angle:f})}line(n,t,i,r=5){this.add(new mr(new gr(n),Math.max(3,n.length*3),t,r,!1),i)}cylinder(n,t,i,r,a,o=8){const s=t.clone().sub(n),l=n.clone().add(t).multiplyScalar(.5),f=new _r(r,i,s.length(),o,1);f.applyQuaternion(new Nn().setFromUnitVectors(new pe(0,1,0),s.normalize())),this.add(f,a,l.x,l.y,l.z)}finish(n){const t=new Nt;t.name=n;for(const[i,r]of this.buckets){const a=fu(r.map(s=>s.index?s.toNonIndexed():s));for(const s of r)s.dispose();if(!a)continue;a.computeBoundingSphere();const o=new at(a,i);o.castShadow=!0,o.receiveShadow=!0,o.name=i.name,t.add(o)}return t}}function Xu(e,n,t=1917){const i=Sn(t),r=new cn,a=[],o=[],s=new ln;for(const d of e){const{x:u,z:g,height:b}=d,M=new pe(u,0,g),A=new pe(u+(i()-.5)*1.5,b*.81,g+(i()-.5)*1.5),p=d.kind==="cedar"?n.coniferBark:n.bark;r.cylinder(M,A,b*.036,.09,p,10),r.solids.push({x:u,y:b*.32,z:g,w:b*.071,h:b*.64,d:b*.071});for(let S=0;S<5;S++){const _=S*1.25;r.cylinder(new pe(u+Math.cos(_)*b*.09,.02,g+Math.sin(_)*b*.09),new pe(u,.75,g),.13,.25,p,6)}const c=d.kind==="cedar";if(c){for(let S=0;S<36;S++){const _=S/36,C=S*2.399+i()*.55,w=b*(.34*Math.pow(1-_,.7)+.015),D=b*(.22+_*.71),O=new pe(Math.cos(C),0,Math.sin(C)),E=new pe(-Math.sin(C),0,Math.cos(C)),v=new pe(u,D,g),P=v.clone().addScaledVector(O,w);P.y-=w*.21,r.line([v,v.clone().addScaledVector(O,w*.4).add(new pe(0,.16,0)),P],.065*(1-_)+.018,p,6);for(let V=1;V<=8;V++)for(const N of[-1,1]){const H=V/8,j=v.clone().addScaledVector(O,w*H);j.y-=w*.21*H*H;const z=w*.28*(1-H+.17),Y=j.clone().addScaledVector(E,N*z).add(new pe(0,-.16,0));r.cylinder(j,Y,.018,.005,p,5);for(let k=0;k<14;k++){s.position.copy(j).lerp(Y,i()).addScaledVector(O,(i()-.5)*.42),s.position.y+=(i()-.5)*.16,s.rotation.set(-Math.PI/2+(i()-.5)*1.8,C+(i()-.5),i()*Math.PI);const le=.48+i()*.37;s.scale.set(le,le*1.45,le),s.updateMatrix(),a.push(s.matrix.clone()),o.push(new Ge().setRGB(.75+i()*.23,.83+i()*.17,.72+i()*.18))}}}continue}const T=c?10:13;for(let S=0;S<T;S++){const _=S*2.399+i()*.6,C=S/T,w=c?b*.34*(1-C*.8):b*(.22+i()*.17),D=b*(c?.26+C*.68:.42+C*.45),O=new pe(u+Math.cos(_)*w*.78,D,g+Math.sin(_)*w*.78);r.cylinder(new pe(u,D*.75,g),O,.17*(1-C*.5),.035,n.bark,6);const E=c?135:110;for(let v=0;v<E;v++){const P=i()*Math.PI*2,V=Math.sqrt(i())*w*.72;s.position.set(O.x+Math.cos(P)*V,O.y+(i()-.5)*(c?.9:b*.25),O.z+Math.sin(P)*V),s.rotation.set(i()*2-1,i()*Math.PI*2,i()*1.4-.7);const N=(c?1.4:1.65)*(.7+i()*.7);s.scale.set(N,N,N),s.updateMatrix(),a.push(s.matrix.clone()),o.push(new Ge().setHSL(.15+i()*.08,.12+i()*.2,.64+i()*.26))}}}const l=r.finish("tree trunks"),f=new sn(new Ot(1,1),e.every(d=>d.kind==="cedar")?n.conifer:n.leaves,a.length);return a.forEach((d,u)=>{f.setMatrixAt(u,d),f.setColorAt(u,o[u])}),f.castShadow=!0,f.receiveShadow=!0,f.name="tree foliage",f.computeBoundingSphere(),l.add(f),{group:l,solids:r.solids}}function ju(e){const n=Sn(1902),t=new ln,i=[],r=[],a=(s,l,f,d)=>{t.position.set(s,l,f),t.rotation.set((n()-.5)*.4,d+(n()-.5)*.4,(n()-.5)*1.6);const u=.13+n()*.15;t.scale.setScalar(u),t.updateMatrix(),i.push(t.matrix.clone()),r.push(new Ge().setHSL(.16+n()*.07,.18,.7+n()*.25))};for(const s of[-1,1])for(let l=-30.9;l<31;l+=.13)for(let f=1.35;f<8.5;f+=.13){if(s===1&&Math.abs(l)<4.8)continue;const d=((l+28)%3.7+3.7)%3.7,u=d<1||d>2.7,g=f>1.7&&f<4.45||f>5.2&&f<8.1;u&&g||n()>.7+.25*Math.sin(l*.6+f*.7)||a(l+n()*.13,f,s*(11.055+n()*.065),s===1?0:Math.PI)}for(let s=1.5;s<23.7;s+=.12)for(let l=-4.4;l<4.5;l+=.12)Math.abs(l)<1.55&&s<4.95||Math.abs(l)<1.1&&[7,11.5,16.1].some(f=>Math.abs(s-f)<1.6)||s>20.3&&s<23.5||n()<.87+Math.sin(l*2+s)*.12&&a(l+n()*.07,s,12.19+n()*.08,0);for(const s of[-1,1])for(let l=2;l<23.8;l+=.14)for(let f=2;f<12;f+=.14)Math.abs(f-7)<1&&[4.25,8.55,12.9,17.1].some(d=>Math.abs(l-d)<1.5)||l>20.5||n()<.76&&a(s*(4.56+n()*.06),l,f,s*Math.PI/2);const o=new sn(new Ot(1,1),e.ivy,i.length);return i.forEach((s,l)=>{o.setMatrixAt(l,s),o.setColorAt(l,r[l])}),o.receiveShadow=!0,o.castShadow=!0,o.name="individual ivy leaves",o.computeBoundingSphere(),o}function Ku(e){const n=Sn(2026),t=new ln,i=new Nt,r=[],a=[],o=[];for(const s of[-1,1]){for(let l=24;l<70;l+=1.8)for(let f=0;f<15;f++)t.position.set(s*(24+n()*2),.5+n()*.7,l+n()),t.rotation.set(n()*2,n()*6,n()),t.scale.setScalar(.65+n()*.55),t.updateMatrix(),a.push(t.matrix.clone());for(let l=6;l<31;l+=1.1)for(let f=0;f<11;f++)t.position.set(s*(l+n()),.4+n()*.9,13.7+n()*1.1),t.rotation.set(n(),n()*6,n()),t.scale.setScalar(.7+n()*.5),t.updateMatrix(),a.push(t.matrix.clone())}for(let s=0;s<5e3;s++){const l=(n()-.5)*46,f=23+n()*45;Math.abs(l)<3.5||Math.abs(f-45)<2||Math.abs(f-65)<2||(t.position.set(l,.06,f),t.rotation.set(0,n()*Math.PI,0),t.scale.set(.2+n()*.2,.11+n()*.08,1),t.updateMatrix(),o.push(t.matrix.clone()))}for(const[s,l,f]of[[e.leaves,a,"shrubs"],[e.grassTuft,o,"grass"]]){const d=new sn(new Ot(1,1),s,l.length);l.forEach((u,g)=>d.setMatrixAt(g,u)),d.receiveShadow=!0,d.castShadow=f==="shrubs",d.name=f,d.computeBoundingSphere(),i.add(d)}return{group:i,solids:r}}async function Xa(e,n,t){const i=await new wr().setMeshoptDecoder(Pr).loadAsync(`/gulou/assets/vegetation/tree-${n}.glb`);i.scene.updateMatrixWorld(!0);const r=new pr().setFromObject(i.scene),a=r.max.y-r.min.y,o=Sn(n==="near"?318:981),s=[],l=new ln,f=new Nt;f.name=`broadleaf trees ${n} — CC0 model, approximate species`;const d=new Map;for(const M of e){const A=Math.floor(M.x/90),p=Math.floor(M.z/90),c=n==="near"?"near":`${A}:${p}`;if(!d.has(c)){const T={trees:[],group:new Nt,center:new lt((A+.5)*90,(p+.5)*90)};d.set(c,T),f.add(T.group)}d.get(c).trees.push(M),s.push({x:M.x,y:M.height*.22,z:M.z,w:.8,h:M.height*.44,d:.8})}const u=[];i.scene.traverse(M=>{if(!(M instanceof at))return;let A=M.geometry.clone();for(const c of["position","normal"]){const T=A.getAttribute(c);if(!T)continue;const S=new Float32Array(T.count*3);for(let _=0;_<T.count;_++)S.set([T.getX(_),T.getY(_),T.getZ(_)],_*3);A.setAttribute(c,new hr(S,3))}A.applyMatrix4(M.matrixWorld);const p=M.material;if(p.roughness=.9,p.map&&(p.map.anisotropy=8),n==="far"&&p.name.includes("trunk")){const c=new gr([new pe(0,0,0),new pe(.1,.9,.18),new pe(-.03,2.1,.61),new pe(.12,3.6,1.4)]);A.dispose(),A=new mr(c,16,1,7,!1);const T=A.getAttribute("position");for(let S=0;S<=16;S++){const _=S/16,C=c.getPointAt(_),w=.18-.09*_;for(let D=0;D<=7;D++){const O=S*8+D,E=new pe().fromBufferAttribute(T,O).sub(C).multiplyScalar(w).add(C);T.setXYZ(O,E.x,E.y,E.z)}}A.computeVertexNormals()}u.push({geometry:A,material:p})});const g=new Ot(1,1.6);for(const M of d.values()){const A=M.trees.map(S=>{const _=S.height/a;return l.position.set(S.x,-r.min.y*_,S.z),l.rotation.set(0,o()*Math.PI*2,0),l.scale.set(_*(.9+o()*.3),_,_*(.9+o()*.3)),l.updateMatrix(),l.matrix.clone()});for(const{geometry:S,material:_}of u){const C=new sn(S,_,M.trees.length);A.forEach((w,D)=>{C.setMatrixAt(D,w),C.setColorAt(D,new Ge().setRGB(.88+o()*.12,.9+o()*.1,.8+o()*.18))}),C.castShadow=n==="near",C.receiveShadow=!0,C.computeBoundingSphere(),M.group.add(C)}const p=n==="near"?1100:400,c=new sn(g,t,M.trees.length*p);let T=0;M.trees.forEach(S=>{for(let _=0;_<p;_++){let C,w,D;do C=o()*2-1,w=o()*2-1,D=o()*2-1;while(C*C+w*w+D*D>1);l.position.set(S.x+C*S.height*.31,S.height*(.75+w*.25),S.z+D*S.height*.32),l.rotation.set(o()*3,o()*6.28,o()*3),l.scale.setScalar(.8+o()*.7),l.updateMatrix(),c.setMatrixAt(T,l.matrix),c.setColorAt(T,new Ge().setHSL(.16,.16,.68+o()*.25)),T++}}),c.castShadow=n==="near"||M.center.x>-160&&M.center.x<25&&M.center.y<390,c.receiveShadow=!0,c.computeBoundingSphere(),M.group.add(c)}return{group:f,solids:s,updateVisibility:(M,A,p)=>{if(n==="near")return;const c=p?800:A==="high"?480:A==="low"?210:330;for(const T of d.values())T.group.visible=Math.hypot(T.center.x-M.x,T.center.y-M.z)<c}}}function ai(e,n=!1){e.updateWorldMatrix(!0,!1);const t=e.geometry.getAttribute("position"),i=new Float32Array(t.count*3),r=new pe;for(let s=0;s<t.count;s++)r.fromBufferAttribute(t,s).applyMatrix4(e.matrixWorld),i.set(r.toArray(),s*3);const a=e.geometry.getIndex(),o=new Uint32Array(a?a.count:t.count);for(let s=0;s<o.length;s++)o[s]=a?a.getX(s):s;if(n)for(let s=0;s<o.length;s+=3){const l=o[s]*3,f=o[s+1]*3,d=o[s+2]*3;(i[f+2]-i[l+2])*(i[d]-i[l])-(i[f]-i[l])*(i[d+2]-i[l+2])<0&&([o[s+1],o[s+2]]=[o[s+2],o[s+1]])}return{vertices:i,indices:o}}const qu=["88778620","88778613","88778615","88778619"];function Yu(e,n){const t=new cn,i=[],r=[],a=new jt({side:St}),o=new ct({name:"background-roof",color:6449766,roughness:.94,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new ct({name:"campus-plaster",color:12958889,roughness:.94}),l=new ct({name:"window-glass-warm",color:3491403,roughness:.3,metalness:.35}),f=new ct({name:"window-glass-cool",color:5004129,roughness:.3,metalness:.35});for(const d of e){if(!d.tags.building||qu.includes(d.id)||d.points.length<3)continue;const u=d.id==="teaching-priority",g=d.points,b=br(d),M=Number(d.tags["building:levels"]),A=u?16.6:Number.isFinite(M)&&M>0?Math.min(55,M*3.3):12,p=new vr(b,{depth:A,bevelEnabled:!1,steps:1}).rotateX(-Math.PI/2),c=p.getAttribute("uv");for(let _=0;_<c.count;_++)c.setXY(_,c.getX(_)/2.4,c.getY(_)/2.4);const T=p.getAttribute("position"),S=new Float32Array(T.count*3);for(let _=0;_<T.count;_++)S.set([T.getX(_),T.getY(_),T.getZ(_)],_*3);r.push(new at(p.clone(),a)),i.push({vertices:S,indices:Uint32Array.from({length:T.count},(_,C)=>C)}),t.add(p,d.kind==="historic"?n.brick:s),t.add(new Er(b).rotateX(-Math.PI/2).translate(0,A+.08,0),o);for(const _ of[g,...d.holes??[]])for(let C=0;C<_.length;C++){const[w,D]=_[C],[O,E]=_[(C+1)%_.length],v=Math.hypot(O-w,E-D);if(v<.5)continue;const P=-Math.atan2(E-D,O-w),V=Math.floor((v-1.2)/3.4);t.box(v,.32,.24,(w+O)/2,A+.16,(D+E)/2,n.stone,!1,P);for(let N=0;N<V;N++)for(let H=2.4;H<A-1;H+=3.3){const j=(N+1)/(V+1),z=w+(O-w)*j,Y=D+(E-D)*j;t.box(1.55,1.9,.14,z,H,Y,N%4?l:f,!1,P),t.box(1.78,.13,.35,z,H-1.02,Y,n.stone,!1,P),u&&(t.box(.075,1.95,.19,z,H,Y,s,!1,P),t.box(1.58,.08,.19,z,H+.28,Y,s,!1,P))}if(u)for(const N of[4.7,8,11.3,14.6])t.box(v,.18,.4,(w+O)/2,N,(D+E)/2,n.stone,!1,P)}}return{group:t.finish("plan-based campus buildings"),fixedMeshes:i,cameraSolids:r}}function ri(e,n,t,i="#aba38d",r="#3d3b32"){const a=document.createElement("canvas");a.width=1024,a.height=192;const o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,1024,192),o.fillStyle=r,o.font='76px "Songti SC", serif',o.textAlign="center",o.textBaseline="middle",o.fillText(e,512,100);const s=new Sr(a);return s.colorSpace=Ft,new at(new Ot(n,t),new ct({map:s,roughness:.85}))}function Qu(e,n){const t=new cn,i=new ct({color:13222572,roughness:.9}),r=new ct({name:"teaching-roof",color:4803654,roughness:.9}),a=new ct({name:"window-glass-warm",color:2505538,metalness:.32,roughness:.22}),o=-85,s=136.4;t.box(14,15.9,1,o,8.1,s-.35,i);for(const M of[-4.6,0,4.6]){t.box(2.65,3.2,.22,o+M,2.3,s+.25,a),t.box(2.5,9.1,.14,o+M,9.1,s+.3,a);for(const A of[5.8,9,12.2])t.box(2.7,.16,.3,o+M,A,s+.45,i)}for(const M of[-6.9,-2.25,2.25,6.9])t.box(.55,14.2,.58,o+M,8,s+.45,i),t.box(.8,.3,.85,o+M,1,s+.45,n.stone),t.box(.85,.25,.9,o+M,15.1,s+.45,i);t.box(14.7,.55,1.8,o,4.6,s+.4,i),t.box(15,.45,2.1,o,15.8,s+.15,i),t.box(15,.32,19.5,o,16.75,127.1,r);for(const M of[-4.4,0,4.4]){const A=new As;A.moveTo(-1.35,0),A.lineTo(-1.35,1.2),A.absarc(0,1.2,1.35,Math.PI,0,!0),A.lineTo(1.35,0),t.add(new vr(A,{depth:.65,bevelEnabled:!1}),i,o+M,16.7,s-.2),t.box(1.6,1.6,.15,o+M,17.6,s+.5,a),t.box(.12,1.7,.19,o+M,17.6,s+.59,i)}for(let M=0;M<3;M++)t.box(13.5,.14,1.4-M*.32,o,.07+M*.14,s+1-M*.16,n.stone,!0);const l=e.gates.hankou,f=l[0],d=l[1]-7;for(const M of[-1,1])t.box(1.25,5.1,1.6,f+M*6.3,2.55,d,i,!0),t.box(1.55,.27,1.9,f+M*6.3,5.2,d,n.stone),t.box(7,3.4,4.3,f+M*11,1.7,d-.6,i,!0),t.box(7.4,.32,4.7,f+M*11,3.52,d-.6,n.stone),t.box(3.6,1.3,.12,f+M*11,2.1,d+1.61,a);t.box(14,.75,1.95,f,5.12,d,i,!0),t.box(14.7,.25,2.2,f,5.6,d,n.stone),t.cylinder(new pe(f,5.75,d),new pe(f,11.6,d),.035,.025,n.metal),t.box(1.65,1.04,.025,f+.85,10.9,d,new ct({color:10235949,side:St}));const u=t.finish("teaching building entrance and Hankou gate"),g=ri("南京大学",7,1.15,"#c0b9a5");g.position.set(f,5.13,d+1.02),u.add(g);const b=ri("教 学 楼",4,.6);b.position.set(o,4.65,s+1.33),u.add(b);for(const[M,A,p]of[["中大路",-75,202],["两江路",-68,150],["金大路",7,59]]){const c=ri(M,1.55,.36,"#485b4c","#f1ead9");c.position.set(A,2.1,p),u.add(c);const T=new at(new _r(.035,.04,2.1,6),n.metal);T.position.set(A,1.05,p),u.add(T)}return{group:u,solids:t.solids}}function Ju(){const e=new cn,n=Rs(32.06247,118.77806),t=new ct({color:7636362,metalness:.5,roughness:.32}),i=new ct({color:10200742,metalness:.35,roughness:.52});for(const[a,o,s,l,f]of[[66,57,190,95,0],[53,49,115,247.5,3],[40,42,62,336,7],[29,33,35,384.5,11],[15,19,24,414,15]]){e.box(a,s,o,n.x+f,l,n.y,t);for(let d=l-s/2+4;d<l+s/2;d+=4.2)e.box(a+.4,.48,o+.4,n.x+f,d,n.y,i);for(let d=-a/2+3;d<a/2;d+=5)for(const u of[-1,1])e.box(.48,s,.42,n.x+f+d,l,n.y+u*o/2,i)}e.cylinder(new pe(n.x+15,426,n.y),new pe(n.x+15,450,n.y),2.5,.3,i),e.box(105,23,80,n.x,11.5,n.y,i);const r=e.finish("紫峰大厦 · geographic position, simplified facade");return r.traverse(a=>{a instanceof at&&(a.castShadow=!1)}),r.userData={latitude:32.06247,longitude:118.77806,heightMetres:450,source:"https://en.wikipedia.org/wiki/Zifeng_Tower",accuracy:"geographic anchor; approximate silhouette"},r}const Zu=180,$u=new pe(0,.03,68),Dr=[new pe(-30,0,39),new pe(30,0,52),new pe(-12,0,115),new pe(75,0,47)],ep=[{name:"北大楼",x:0,z:18,description:"中央塔楼、十字脊与爬藤，是许多南大学生和校友记忆中的校园风景。"},{name:"东大楼",x:37,z:48,description:"抬高的中央屋顶、灰砖与深色木窗，共同构成庭院东侧的建筑轮廓。"},{name:"西大楼",x:-37,z:46,description:"沿着庭院西侧慢慢走，可以看到起伏的瓦顶、分层的窗带和掩映其间的树木。"},{name:"教学楼／郑钢楼",x:-85,z:141,description:"沿两江路展开的教学楼，中部入口面向中大路。外轮廓来自校园平面图，立面按官方 VR 近似重建。"},{name:"中大路",x:-86,z:256,description:"从教学楼一带通向汉口路校门的校园道路，与北大楼前的金大路有横向错位。"},{name:"汉口路校门",x:-91,z:350,description:"连接北园、中大路与汉口路的校门。穿过汉口路后，可继续步入南园。"},{name:"广州路校门",x:-35,z:715,description:"南园南端的校园出入口，沿校园道路可以回到宿舍区与汉口路。"},{name:"大礼堂",x:-27,z:99,description:"大礼堂于 1920 年投入使用，是金陵大学旧址的组成部分。中式屋顶、三樘入口和两侧耳房，记录着校园公共生活的记忆。"}];async function tp(e,n){const t=new Nt;t.name="core-campus",e.add(t);const i=[],r=[],a=[],o=[],s=[],l=await fetch("/gulou/data/campus-layout.json");if(!l.ok)throw new Error("校园地图加载失败");const f=await l.json(),d=new cn,u=new ct({color:10857110,roughness:1});d.box(1800,.4,1900,-130,-.2,160,u);for(let N=-640;N<192;N+=64)for(let H=-320;H<768;H+=64)i.push({x:N+32,y:-.2,z:H+32,w:64,h:.4,d:64});const g=new ct({name:"paving",color:10133146,map:n.textures.get("stone-grain.webp"),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),b=(N,H,j)=>{const z=new Er(br(N)).rotateX(-Math.PI/2),Y=z.getAttribute("uv");for(let k=0;k<Y.count;k++)Y.setXY(k,Y.getX(k)/3.6,Y.getY(k)/3.6);if(H===g){const k=new at(z);k.position.y=j,k.updateMatrixWorld(),a.push(ai(k,!1))}d.add(z,H,0,j,0)};for(const N of f.roads){b(N,g,.035);for(const H of[N.points,...N.holes??[]])for(let j=0;j<H.length;j++){const[z,Y]=H[j],[k,le]=H[(j+1)%H.length],de=(z+k)/2,Pe=(Y+le)/2,Be=Math.hypot(k-z,le-Y);Be<1||de<-163||de>85||Pe<-27||Pe>350||d.box(.16,.12,Be,de,.07,Pe,n.stone,!1,Math.atan2(k-z,le-Y))}}for(const N of f.lawns)b(N,n.grass,.022);for(const N of f.features.filter(H=>H.tags.leisure==="track")){b(N,new ct({color:10380628,roughness:.96}),.04);for(const H of N.holes??[])b({points:H},n.grass,.041)}d.box(12,.06,5,0,.025,16.4,n.path),d.box(8.5,.06,6.5,-31,.025,99,n.path);const M=d.finish("registered campus roads lawns and playing fields");t.add(M),i.push(...d.solids);const A=Qu(f,n);t.add(A.group),i.push(...A.solids),r.push(...A.group.children),t.add(Ju());const p=new wr().setMeshoptDecoder(Pr),c=await p.loadAsync("/gulou/assets/buildings/beidalou.glb");c.scene.traverse(N=>{if(!(N instanceof at))return;N.castShadow=N.receiveShadow=!0;const H=N.material;H.name==="historic-brick"&&(N.material=n.brick),H.name==="limestone"&&(H.map=n.textures.get("stone-grain.webp"),H.color.set(12039590),H.roughness=.94),H.name.startsWith("window-glass")&&(H.envMapIntensity=1.7),r.push(N)}),t.add(c.scene),c.scene.updateMatrixWorld(!0),c.scene.traverse(N=>{N instanceof at&&N.material.name==="roof"&&a.push(ai(N,!0))});const T=await fetch("/gulou/data/beidalou-collision.json");if(!T.ok)throw new Error("建筑碰撞数据加载失败");const S=await T.json();i.push(...S);const _=await fetch("/gulou/data/landmarks-collision.json");if(!_.ok)throw new Error("扩展区域碰撞数据未加载");i.push(...await _.json());const C=Yu(f.features,n);a.push(...C.fixedMeshes),t.add(ju(n));const w=[{x:-16,z:21,height:14,kind:"cedar"},{x:17,z:19,height:16,kind:"cedar"},{x:-28,z:30,height:15},{x:29,z:31,height:17},{x:-29,z:48,height:17},{x:31,z:57,height:16},{x:-31,z:68,height:18},{x:27,z:76,height:16},{x:-13,z:63,height:19},{x:15,z:83,height:18},{x:-35,z:6,height:17},{x:38,z:3,height:15},{x:-19,z:-22,height:17},{x:23,z:-24,height:18}],D=Xu(w.filter(N=>N.kind==="cedar"),n);t.add(D.group),i.push(...D.solids);const O=await Xa(w.filter(N=>N.kind!=="cedar"),"near",n.leaves);t.add(O.group),i.push(...O.solids);const E=Ku(n);t.add(E.group);let v=1;async function P(N=()=>{}){await new Promise(re=>setTimeout(re,50));const H=[];t.add(C.group),r.push(...C.cameraSolids);const j=await Promise.all(["east","west","auditorium"].map(re=>p.loadAsync(`/gulou/assets/buildings/${re}.glb`)));for(const re of j)re.scene.traverse(ne=>{if(!(ne instanceof at))return;const F=ne.material;F.name==="historic-brick"&&(ne.material=n.brick),F.name==="limestone"&&(F.map=n.textures.get("stone-grain.webp"),F.color.set(12039590)),F.name.startsWith("window-glass")&&(F.envMapIntensity=1.7),ne.castShadow=ne.receiveShadow=!0,r.push(ne)}),t.add(re.scene),re.scene.updateMatrixWorld(!0),re.scene.traverse(ne=>{ne instanceof at&&ne.material.name==="roof"&&a.push(ai(ne,!0))});for(const re of[{name:"东大楼",x:40.92,y:2.1,z:45.4,a:-Math.PI/2,w:.65,h:.38},{name:"西大楼",x:-40.57,y:2.1,z:43.2,a:Math.PI/2,w:.65,h:.38},{name:"大礼堂",x:-33.76,y:7.46,z:98.9,a:Math.PI/2,w:1.8,h:.48}]){const ne=document.createElement("canvas");ne.width=512,ne.height=160;const F=ne.getContext("2d");F.fillStyle="#86784f",F.fillRect(0,0,512,160),F.strokeStyle="#b3a374",F.lineWidth=6,F.strokeRect(8,8,496,144),F.fillStyle="#2a2419",F.font='72px "Songti SC", "SimSun", serif',F.textAlign="center",F.textBaseline="middle",F.fillText(re.name,256,85);const q=new Sr(ne);q.colorSpace=Ft;const fe=new at(new Ot(re.w,re.h),new ct({map:q,roughness:.65,metalness:.22}));fe.position.set(re.x,re.y,re.z),fe.rotation.y=re.a,fe.receiveShadow=!0,t.add(fe)}N(),v++,await new Promise(re=>setTimeout(re,50));const z=Sn(88),Y=[],k=(re,ne)=>!f.features.some(F=>F.tags.building&&qn(re,ne,F))&&!f.roads.some(F=>qn(re,ne,F));for(let re=156;re<342;re+=15)for(const ne of[-1,1]){const F=-85-(re-182)*.035+ne*8;k(F,re)&&Y.push({x:F,z:re,height:15+z()*5})}for(let re=0;re<6500&&Y.length<190;re++){const ne=-575+z()*705,F=-240+z()*960;Math.abs(ne)<42&&F>-30&&F<90||ne>-103&&ne<-69&&F>136&&F<348||!k(ne,F)||!f.lawns.some(q=>qn(ne,F,q))||Y.some(q=>Math.hypot(q.x-ne,q.z-F)<11)||Y.push({x:ne,z:F,height:12+z()*8})}const le=await Xa(Y,"far",n.leaves);t.add(le.group),H.push(...le.solids),s.push(le.updateVisibility);const de=new cn;for(const re of Dr){for(let ne=0;ne<5;ne++)de.box(2.25,.075,.105,re.x,.52,re.z+ne*.12,n.wood);for(let ne=0;ne<4;ne++)de.box(2.25,.12,.09,re.x,.78+ne*.16,re.z+.54,n.wood);for(const ne of[-1,1])de.box(.1,.5,.52,re.x+ne*.83,.25,re.z+.25,n.metal);de.solids.push({x:re.x,y:.5,z:re.z+.25,w:2.25,h:1,d:.68})}const Pe=new ct({name:"lamp-glass",color:16247749,emissive:12755301,emissiveIntensity:.18,roughness:.35}),Be=[...[-1,1].flatMap(re=>[23,43,64,-20].map(ne=>[re*32.3,ne])),[-20,89],[-20,112],...Array.from({length:8},(re,ne)=>[-77-ne*.9,165+ne*24]),[-82,389],[-74,445],[-39,519],[-22,600],[-28,686]];for(const[re,ne]of Be){o.push(new pe(re,3.85,ne)),de.cylinder(new pe(re,0,ne),new pe(re,3.9,ne),.09,.045,n.metal,8),de.box(.38,.55,.38,re,3.85,ne,Pe),de.box(.52,.1,.52,re,4.15,ne,n.metal);for(const F of[-1,1])for(const q of[-1,1])de.box(.035,.6,.035,re+F*.2,3.85,ne+q*.2,n.metal);de.solids.push({x:re,y:1.8,z:ne,w:.18,h:3.6,d:.18})}const Qe=de.finish("benches lamps and boundary");return t.add(Qe),H.push(...de.solids),r.push(...Qe.children),N(),v++,H}return{root:t,map:f,updateVegetation:(N,H,j)=>s.forEach(z=>z(N,H,j)),solids:i,fixedMeshes:a,lampPositions:o,cameraSolids:r,expand:P,get sectors(){return v}}}const ap=Object.freeze(Object.defineProperty({__proto__:null,benchLocations:Dr,bounds:ws,campusPlaces:ep,createWorld:tp,maxFlightAltitude:Zu,spawn:$u},Symbol.toStringTag,{value:"Module"}));export{cn as B,wr as G,Pr as M,ba as P,Fe as S,ip as W,tp as c,Zu as m,Sn as r,$u as s,ap as w};
